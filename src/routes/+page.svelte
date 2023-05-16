<script>
	import Terminal from '$lib/components/Terminal.svelte';
	import { useTerminal } from '$lib/stores';
	import LinkedinSVG from '$lib/svg/linkedin.svelte';
	import GmailSVG from '$lib/svg/gmail.svelte';
	import GithubSVG from '$lib/svg/github.svelte';
</script>

<main>
	{#if $useTerminal}
		<Terminal />
	{:else}
		<section>
			<h1>Kevin Semilla</h1>
			<h2>Software Engineer</h2>
			<div style="color:#06989a">
				<a href="/experience">experience</a> - <a href="/skills">skills</a> -
				<a href="/projects">projects</a>
			</div>
			<div class="links">
				<a href="https://www.linkedin.com/in/ksemilla/" target="_blank"
					><svelte:component this={LinkedinSVG} /></a
				>
				<a href="mailto:kevinsemilla@gmail.com"><svelte:component this={GmailSVG} /></a>
				<a href="https://github.com/ksemilla" target="_blank"
					><svelte:component this={GithubSVG} /></a
				>
			</div>
		</section>
	{/if}
</main>

<style>
	section {
		text-align: center;
		padding-top: 8rem;
	}
	h1 {
		font-weight: 200;
		padding: 0;
		margin: 0;
		font-size: xx-large;
	}
	h2 {
		color: #635551;
		font-weight: 200;
		padding: 0;
		margin: 0;
	}
	a {
		color: #06989a;
		text-decoration: none;
	}

	a:hover {
		color: #0cd5d9;
	}

	.links {
		margin-top: 15px;
		display: flex;
		justify-content: center;
		column-gap: 20px;
	}
</style>
