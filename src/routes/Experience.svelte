<script>
	import { SEexperience } from '$lib/const';
</script>

<h4 class="section-header">EXPERIENCE</h4>
<ul class="exp-container">
	{#each SEexperience as exp}
		<li>
			<a href={exp.site} target="_blank">
				<header class="header">
					<h4 class="duration">
						{exp.duration}
					</h4>
				</header>
				<div class="container">
					<div class="title-container">
						<div>
							<h4 class="title">{exp.title}</h4>
							<h3 class="company">
								{exp.company}
							</h3>
						</div>
						<p>{exp.description}</p>
					</div>
					<ul class="tags-container">
						{#each exp.tags as tag}
							<li class="tag">
								{tag}
							</li>
						{/each}
					</ul>
				</div>
			</a>
		</li>
	{/each}
</ul>
<div class="resume-container">
	<a href="./resume.pdf" class="resume">View full resume <i class="fa-solid fa-arrow-right" /></a>
</div>

<style>
	.exp-container {
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 40px;
		list-style-type: none;
	}
	li {
		list-style-type: none;
	}

	a {
		display: flex;
		gap: 20px;
		border-radius: 5px;
		text-decoration: none;
		color: #839496;
		margin: -1rem;
		padding: 1rem;
	}
	a:hover {
		background-color: rgba(148, 163, 184, 0.1);
		border-radius: 0.375rem;
		filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
		color: rgb(127, 144, 146);
	}
	a:hover > i {
		transform: translateX(5px);
		transition: all;
		transition-duration: 0.1s;
	}
	.header {
		flex: 1;
	}
	.container {
		flex: 3;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.duration {
		font-weight: 500;
		font-size: 12px;
		padding: 0;
		margin-top: 2px;
	}
	.title-container {
		display: flex;
		flex-direction: column;
	}
	.title {
		padding: 0;
		margin: 0;
		color: white;
	}
	.company {
		padding: 5px 0px;
		margin: 0;
		color: #a8bcc0;
		font-weight: 300;
		font-size: 1.1rem;
	}
	.tags-container {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
		padding: 0;
	}
	.tag {
		color: rgb(94, 234, 212);
		background-color: rgba(45, 212, 191, 0.1);
		font-weight: 500;
		line-height: 1.25rem;
		font-size: 0.75rem;
		padding: 0.25rem 0.75rem;
		border-radius: 9999px;
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
	@media (max-width: 768px) {
		a {
			display: block;
		}
	}
</style>
