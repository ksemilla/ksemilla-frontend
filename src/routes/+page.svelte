<script lang="ts">
	import { onMount } from 'svelte';
	import { useTerminal } from '$lib/stores';
	import Terminal from '$lib/components/Terminal.svelte';

	import Skills from './Skills.svelte';
	import Projects from './Projects.svelte';
	import Experience from './Experience.svelte';
	import Title from './Title.svelte';
	import Blurb from './Blurb.svelte';
	import Nav from './Nav.svelte';
	import Socials from './Socials.svelte';
	import About from './About.svelte';

	let scrollPosition: number = 0;

	onMount(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function handleScroll() {
		scrollPosition = window.pageYOffset;
	}

	const handleUseTerminal = () => {
		useTerminal.set(true);
	};
</script>

{#if $useTerminal}
	<Terminal />
{:else}
	<main>
		<div class="static">
			<div>
				<div>
					<Title />
					<div class="blurb">
						<Blurb />
					</div>
					<Nav />
				</div>
				<Socials />
			</div>
		</div>
		<div class="scroll">
			<section id="about"><About /></section>
			<section id="experience"><Experience /></section>
			<section id="projects"><Projects /></section>
			<section id="skills"><Skills /></section>
			<section style="height:500px;text-align:center;background-color:#002b36">
				<button on:click|preventDefault={handleUseTerminal}>Prefer using a terminal?</button>
			</section>
		</div>
	</main>
{/if}

<style>
	main {
		display: flex;
		max-width: 1100px;
		margin: auto;
		padding: 0px 80px;
	}
	.static {
		flex: 1;
		position: relative;
	}
	.static > div {
		position: fixed;
		top: 0;
		bottom: 0;
		padding: 100px 0px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.scroll > * {
		padding-top: 100px;
	}
	.scroll {
		flex: 1;
	}
	.blurb {
		margin: 50px 0px 100px 0px;
	}
	button {
		border: none;
		background-color: transparent;
		color: #839496;
		cursor: pointer;
	}
	button:hover {
		color: rgb(94, 234, 212);
	}
	@media (max-width: 1024px) {
		main {
			display: block;
			padding: 0px 20px;
		}
		.static {
			position: static;
		}
		.static > div {
			position: inherit;
			padding: 60px 0px 80px 0px;
			display: block;
		}
		.blurb {
			margin: 25px 0px;
		}
		.scroll > section:first-child {
			padding-top: 0px;
		}
	}
</style>
