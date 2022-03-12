<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
  import { createClient ,setClient, dedupExchange, cacheExchange, fetchExchange } from '@urql/svelte';
  import { makeOperation } from '@urql/core';
  import { authExchange } from '@urql/exchange-auth';
  import { browser } from "$app/env"
  import { API_URL } from '../config';
  import { isLogged, user } from "$lib/stores/auth"
  import { goto } from "$app/navigation"

  const client = createClient({
    url: `${API_URL}/query`,
    fetchOptions: () => {
      return {}
    },
    exchanges: [
      dedupExchange,
      cacheExchange,
      authExchange({
        addAuthToOperation: ({
          authState,
          operation,
        }) => {
          // the token isn't in the auth state, return the operation without changes
          if (!authState || !authState.token) {
            return operation;
          }

          // fetchOptions can be a function (See Client API) but you can simplify this based on usage
          const fetchOptions =
            typeof operation.context.fetchOptions === 'function'
              ? operation.context.fetchOptions()
              : operation.context.fetchOptions || {};
          return makeOperation(
            operation.kind,
            operation,
            {
              ...operation.context,
              fetchOptions: {
                ...fetchOptions,
                headers: {
                  ...fetchOptions.headers,
                  "Authorization": authState.token,
                },
              },
            },
          );
        },
        willAuthError: ({ authState }) => {
          if (!authState) return true;
          // e.g. check for expiration, existence of auth etc
          return false;
        },
        didAuthError: ({ error }) => {
          // check if the error was an auth error (this can be implemented in various ways, e.g. 401 or a special error code)
          return error.graphQLErrors.some(
            e => e.extensions?.code === 'FORBIDDEN',
          );
        },
        getAuth: async ({ authState }) => {
          if (!authState && browser) {
            const token = localStorage.getItem("token")
            if (token) {
              await fetch(`${API_URL}/query`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  query: `
                    mutation ($token: String!) {
                      verifyToken(input: { token: $token }) {
                        id
                        role
                        email
                      }
                    }`,
                  variables: {
                    token
                  },
                }),
              })
              .then((res) => res.json())
              .then((result) => {
                if (result.error) {
                  console.log(result.error)
                  goto("/")
                } else if (result.data) {
                  // console.log(result.data.verifyToken)
                  isLogged.update(()=>true)
                  user.update(()=>result.data.verifyToken)
                }
              });
            }
            if (token) {

            
            return { token };
            }
            goto("/")
            return null;

          }
        },
      }),
      fetchExchange
    ],
  });
  setClient(client)

</script>

<Header />

<main>
	<slot />
</main>

<style>
	main {
		width: 100%;
		box-sizing: border-box;
    min-height: calc(100vh - 50px);
	}
</style>
