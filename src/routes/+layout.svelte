<script>
	import Nav from '$lib/components/Nav.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>Your friendly neighborhood programmer</title>
</svelte:head>

<Nav />
<slot />
