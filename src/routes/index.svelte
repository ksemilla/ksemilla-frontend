<script context="module">
	export const prerender = true;
</script>

<script>
  import Terminal from "$lib/terminal/index.svelte"
</script>

<svelte:head>
	<title>Your friendly neighborhood programmer</title>
</svelte:head>

<section class="text-center pt-48">
  <h1 class="font-base text-3xl md:text-5xl">Kevin Semilla</h1>
  <h2 class="text-xl md:text-2xl">Software Engineer</h2>
  <div>
    <a href="/experience">experience</a> - <a href="/skills">skills</a> - <a href="/projects">projects</a>
  </div>
</section>

<!-- <Terminal /> -->

<style>
  h2 {
    color: #635551;
  }

  a {
    color: #06989A;
  }

  a:hover {
    text-decoration: underline;
  }
</style>