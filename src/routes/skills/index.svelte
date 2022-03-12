<script>
  import SvelteLogo from "$lib/images/svelte-logo.svelte"
  import DjangoLogo from "$lib/images/django.svelte"
  import AWSLogo from "$lib/images/aws.svelte"
  import GolangLogo from "$lib/images/golang.svelte"
  import PythonLogo from "$lib/images/python.svelte"
  import JSLogo from "$lib/images/js.svelte"
  import ReactLogo from "$lib/images/react.svelte"
  import TSLogo from "$lib/images/typescript.svelte"
  import GraphQLLogo from "$lib/images/graphql.svelte"
  import PostgresLogo from "$lib/images/postgres.svelte"
  import MongoLogo from "$lib/images/mongo.svelte"
  import NextLogo from "$lib/images/next.svelte"
  import UbuntuLogo from "$lib/images/ubuntu.svelte"

  const stack = [
    {
      label: "Python",
      Component: PythonLogo
    },
    {
      label: "Javascript",
      Component: JSLogo
    },
    {
      label: "Golang",
      Component: GolangLogo
    },
    {
      label: "Django",
      Component: DjangoLogo
    },
    {
      label: "React",
      Component: ReactLogo
    },
    {
      label: "Nextjs",
      Component: NextLogo
    },
    {
      label: "Typescript",
      Component: TSLogo
    },
    {
      label: "Svelte",
      Component: SvelteLogo
    },
    {
      label: "GraphQL",
      Component: GraphQLLogo
    },
    {
      label: "Postgres",
      Component: PostgresLogo
    },
    {
      label: "MongoDB",
      Component: MongoLogo
    },
    {
      label: "AWS",
      Component: AWSLogo
    },
    {
      label: "Linux Ubuntu",
      Component: UbuntuLogo
    }
  ]

</script>

<main class="max-w-5xl m-auto p-8">
  <h1 class="text-3xl font-medium text-blue-500 mb-4 text-center font-semibold">Skills</h1>
  <ul class="stack-list">
    {#each stack as s}
    <li class="flex flex-col items-center gap-y-2">
      <svelte:component this={s.Component} />
      <p class="label">{s.label}</p>
    </li>
    {/each}
  </ul>
</main>

<style>
  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    column-gap: 40px;
  }

  .label {
    font-weight: 500;
  }

  .stack-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 40px;
    margin: auto;
    max-width: 1000px;
  }

  @media (max-width: 1200px) {
    .stack-list {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  @media (max-width: 768px) {
    .stack-list {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (max-width: 650px) {
    .stack-list {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>