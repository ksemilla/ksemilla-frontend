<script>
	import SvelteLogo from '$lib/svg2/svelte-logo.svelte';
	import DjangoLogo from '$lib/svg2/django.svelte';
	import AWSLogo from '$lib/svg2/aws.svelte';
	import GolangLogo from '$lib/svg2/golang.svelte';
	import PythonLogo from '$lib/svg2/python.svelte';
	import JSLogo from '$lib/svg2/js.svelte';
	import ReactLogo from '$lib/svg2/react.svelte';
	import TSLogo from '$lib/svg2/typescript.svelte';
	import GraphQLLogo from '$lib/svg2/graphql.svelte';
	import PostgresLogo from '$lib/svg2/postgres.svelte';
	import MongoLogo from '$lib/svg2/mongo.svelte';
	import NextLogo from '$lib/svg2/next.svelte';
	import UbuntuLogo from '$lib/svg2/ubuntu.svelte';
	import FastapiSvg from '$lib/svg2/FastapiSVG.svelte';
	import NestjsLogo from '$lib/svg2/nestjs-icon.svelte';
</script>

<h4 class="section-header">SKILLS</h4>
<div class="container">
	<div class="item">
		<svelte:component this={PythonLogo} />
		<p class="tag">Python</p>
	</div>
	<div class="item">
		<svelte:component this={JSLogo} />
		<p class="tag">JavaScript</p>
	</div>
	<div class="item">
		<svelte:component this={GolangLogo} />
		<p class="tag">Golang</p>
	</div>
	<div class="item">
		<svelte:component this={DjangoLogo} />
		<p class="tag">Django</p>
	</div>
	<div class="item">
		<svelte:component this={FastapiSvg} />
		<p class="tag">Fastapi</p>
	</div>
	<div class="item">
		<svelte:component this={NestjsLogo} />
		<p class="tag">Nestjs</p>
	</div>
	<div class="item">
		<svelte:component this={ReactLogo} />
		<p class="tag">React</p>
	</div>
	<div class="item">
		<svelte:component this={NextLogo} />
		<p class="tag">Nextjs</p>
	</div>
	<div class="item">
		<svelte:component this={SvelteLogo} />
		<p class="tag">Svelte</p>
	</div>
	<div class="item">
		<svelte:component this={TSLogo} />
		<p class="tag">Typescript</p>
	</div>
	<div class="item">
		<svelte:component this={GraphQLLogo} />
		<p class="tag">GraphQL</p>
	</div>
	<div class="item">
		<svelte:component this={PostgresLogo} />
		<p class="tag">Postgres</p>
	</div>
	<div class="item">
		<svelte:component this={MongoLogo} />
		<p class="tag">MongoDB</p>
	</div>
	<div class="item">
		<svelte:component this={AWSLogo} />
		<p class="tag">AWS</p>
	</div>
	<div class="item">
		<svelte:component this={UbuntuLogo} />
		<p class="tag">Ubuntu</p>
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
	}

	.item {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px 0;
	}

	.tag {
		font-weight: 500;
		line-height: 1.25rem;
		font-size: 0.75rem;
		padding: 0.25rem 0.75rem;
		border-radius: 9999px;
	}
	@media (max-width: 640px) {
		.container {
			grid-template-columns: repeat(4, 1fr);
		}
	}
	@media (max-width: 480px) {
		.container {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media (max-width: 360px) {
		.container {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
