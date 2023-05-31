<script>
	import { projects } from '$lib/const';
</script>

<h4 class="section-header">PROJECTS</h4>
<ul>
	{#each [projects[2], projects[1]] as project}
		<li>
			<a href={project.links.site} target="_blank">
				<div style="flex:1">
					<h4 class="title">{project.title}</h4>
					<p>{project.description}</p>
				</div>
				<div class="container">
					{#if project.thumbnail}
						<img src={`./${project.thumbnail}`} alt="project-img" />
					{/if}
				</div>
			</a>
		</li>
	{/each}
</ul>
<div class="resume-container">
	<a href="/projects" class="resume"
		><i class="fa fa-chevron-right" aria-hidden="true" style="font-size:15px" />View all projects
	</a>
</div>

<style>
	ul {
		display: flex;
		flex-direction: column;
		padding: 0;
		margin: 0;
		gap: 40px;
	}
	li {
		list-style-type: none;
	}
	a {
		display: flex;
		flex-direction: row-reverse;
		gap: 30px;
		border-radius: 5px;
		text-decoration: none;
		color: #839496;
		transition-property: all;
		transition: cubic-bezier(0.4, 0, 0.2, 1);
		transition: 0.2s;
		margin: -1rem;
		padding: 1rem;
	}
	a:hover {
		cursor: pointer;
		background-color: rgba(148, 163, 184, 0.1);
		border-radius: 0.375rem;
		filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
		color: rgb(127, 144, 146);
	}

	.container {
		width: 140px;
	}
	img {
		height: 80px;
		width: 130px;
		border-radius: 3px;
		border: 2px solid;
	}
	.title {
		padding: 0;
		margin: 0;
		color: white;
	}
	.resume-container {
		padding: 30px 0;
		display: inline-block;
	}
	.resume {
		color: white;
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 10px;
		transition-property: all;
		transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
		transition-duration: 1s;
	}
	.resume:hover {
		color: rgb(94, 234, 212);
	}
	@media (max-width: 640px) {
		a {
			display: block;
		}
	}
</style>
