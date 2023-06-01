<script>
	import { projects } from '$lib/const';
</script>

<main>
	<div style="display:inline-block">
		<a class="back" href="/"><i class="fa-solid fa-arrow-left" aria-hidden="true" />Kevin Semilla</a
		>
	</div>

	<h1 class="header">All Projects</h1>
	<table>
		<thead>
			<tr>
				<th>Project</th>
				<th>Stack</th>
				<th class="header-link">Links</th>
			</tr>
		</thead>
		<tbody>
			{#each projects as project}
				<tr>
					<td><span class="project-cell">{project.title}</span></td>
					<td class="stack-cell">
						{#each project.tags as tag}
							<span class="tag">{tag}</span>
						{/each}
					</td>
					<td class="link-cell">
						{#if project.links.site}
							<span>
								<a class="links" href={project.links.site} target="_blank"
									>{project.links.site_label}</a
								>
							</span>
						{/if}
						{#if project.links.github_frontend}
							<span>
								<a class="links" href={project.links.github_frontend} target="_blank">
									<i class="fa fa-github" aria-hidden="true" /> Frontend
								</a>
							</span>
						{/if}
						{#if project.links.github_backend}
							<span>
								<a class="links" href={project.links.github_backend} target="_blank">
									<i class="fa fa-github" aria-hidden="true" /> Backend
								</a>
							</span>
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</main>

<style>
	main {
		max-width: 1100px;
		margin: auto;
		padding: 100px 80px;
	}

	.back {
		display: inline-block;
		text-decoration: none !important;
		color: rgb(94, 234, 212);
		margin: 10px 0px;
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.back:hover {
		cursor: pointer;
		border-radius: 0.375rem;
		filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
	}
	.back:hover > i {
		transform: translateX(-5px);
		transition: all;
		transition-duration: 0.1s;
	}
	.header {
		margin: 0;
	}
	table {
		margin-top: 30px;
		border-collapse: collapse;
		border-spacing: 20px;
	}

	thead > tr > th {
		font-weight: 500;
		position: sticky;
		top: 0;
		font-size: 0.85rem;
		padding: 0px 40px 20px 0px;
		text-align: left;
	}
	tbody > tr {
		border-top: 1px solid rgba(131, 148, 150, 0.1);
	}
	tbody > tr > td {
		padding: 20px 0px;
		padding-right: 40px;
	}
	.project-cell {
		font-size: 0.9rem;
		font-weight: 700;
		color: rgb(196, 196, 196);
	}
	.stack-cell {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
	}
	.link-cell {
		white-space: nowrap;
	}
	.tag {
		color: rgb(94, 234, 212);
		background-color: rgba(45, 212, 191, 0.1);
		font-weight: 500;
		line-height: 1.25rem;
		font-size: 0.7rem;
		padding: 0.25rem 0.75rem;
		border-radius: 9999px;
	}
	.links {
		text-decoration: none;
		color: #839496;
	}
	.links:hover {
		color: rgb(94, 234, 212);
	}
	@media (max-width: 1024px) {
		main {
			display: block;
			padding: 20px 20px;
		}
	}
	@media (max-width: 768px) {
		main {
			display: block;
			padding: 20px 20px;
		}
		.link-cell {
			display: none;
		}
		.header-link {
			display: none;
		}
	}
</style>
