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
  <ul class="grid grid-cols-12 gap-x-4 gap-y-8">
    {#each stack as s}
    <li class="col-span-4 sm:col-span-3 md:col-span-2 flex flex-col items-center gap-y-2 text-center">
      <svelte:component this={s.Component} />
      <p class="text-sm">{s.label}</p>
    </li>
    {/each}
  </ul>
</main>