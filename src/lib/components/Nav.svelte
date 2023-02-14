<script>
	import { page } from '$app/stores';
	import UkraineFlagSvg from './UkraineFlagSVG.svelte';
	$: route = $page.route.id;
</script>

<nav class="flex justify-between p-2">
	<div>
		<a href="/"><UkraineFlagSvg /></a>
	</div>
	{#if route != '/'}
		<div class="space-x-4">
			<a href="/experience">Experience</a>
			<a href="/skills">Skills</a>
			<a href="/projects">Projects</a>
		</div>
	{/if}
</nav>
