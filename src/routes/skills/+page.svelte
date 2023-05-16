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

<main>
	<h1>Skills</h1>
	<ul>
		{#each stack as s}
			<li>
				<svelte:component this={s.Component} />
				<p>{s.label}</p>
			</li>
		{/each}
	</ul>
</main>

<style>
	main {
		max-width: 800px;
		margin: auto;
		margin-top: 40px;
	}
	h1 {
		text-align: center;
		margin: 50px 0px;
	}
	ul {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		grid-gap: 30px;
		padding: 0;
	}
	li {
		list-style: none;
		text-align: center;
	}

	@media (max-width: 798px) {
		ul {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}
	@media (max-width: 468px) {
		ul {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
