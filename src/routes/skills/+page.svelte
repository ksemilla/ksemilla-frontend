<script>
	import SvelteLogo from '$lib/svg/svelte-logo.svelte';
	import DjangoLogo from '$lib/svg/django.svelte';
	import AWSLogo from '$lib/svg/aws.svelte';
	import GolangLogo from '$lib/svg/golang.svelte';
	import PythonLogo from '$lib/svg/python.svelte';
	import JSLogo from '$lib/svg/js.svelte';
	import ReactLogo from '$lib/svg/react.svelte';
	import TSLogo from '$lib/svg/typescript.svelte';
	import GraphQLLogo from '$lib/svg/graphql.svelte';
	import PostgresLogo from '$lib/svg/postgres.svelte';
	import MongoLogo from '$lib/svg/mongo.svelte';
	import NextLogo from '$lib/svg/next.svelte';
	import UbuntuLogo from '$lib/svg/ubuntu.svelte';
	import FastapiSvg from '$lib/svg/FastapiSVG.svelte';

	const stack = [
		{
			label: 'Python',
			Component: PythonLogo
		},
		{
			label: 'Javascript',
			Component: JSLogo
		},
		{
			label: 'Golang',
			Component: GolangLogo
		},
		{
			label: 'Django',
			Component: DjangoLogo
		},
		{
			label: 'Fastapi',
			Component: FastapiSvg
		},
		{
			label: 'React',
			Component: ReactLogo
		},
		{
			label: 'Nextjs',
			Component: NextLogo
		},
		{
			label: 'Typescript',
			Component: TSLogo
		},
		{
			label: 'Svelte',
			Component: SvelteLogo
		},
		{
			label: 'GraphQL',
			Component: GraphQLLogo
		},
		{
			label: 'Postgres',
			Component: PostgresLogo
		},
		{
			label: 'MongoDB',
			Component: MongoLogo
		},
		{
			label: 'AWS',
			Component: AWSLogo
		},
		{
			label: 'Linux Ubuntu',
			Component: UbuntuLogo
		}
	];
</script>

<main class="max-w-5xl m-auto p-8">
	<h1 class="text-3xl font-medium text-blue-500 mb-8 text-center">Skills</h1>
	<ul class="grid grid-cols-12 gap-x-4 gap-y-8">
		{#each stack as s}
			<li
				class="col-span-4 sm:col-span-3 md:col-span-2 flex flex-col items-center gap-y-2 text-center"
			>
				<svelte:component this={s.Component} />
				<p class="text-sm text-ubuntu-text">{s.label}</p>
			</li>
		{/each}
	</ul>
</main>
