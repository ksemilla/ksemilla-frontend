<script>
	import './style.css';
</script>

<svelte:head>
	<title>Your friendly neighborhood programmer</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="app">
	<main>
		<slot />
	</main>
</div>
