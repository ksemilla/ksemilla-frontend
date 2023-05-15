<script>
	import Terminal from '$lib/components/Terminal.svelte';
	import { useTerminal } from '$lib/stores';
</script>

<div>
	{#if $useTerminal}
		<Terminal />
	{:else}
		default
	{/if}
</div>
