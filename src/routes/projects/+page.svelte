<script>
	const projects = [
		{
			title: 'Intervengine',
			description:
				'Health management system. I am designated in frontend for this project for a client in New Zealand',
			stackList: ['Reactjs', 'React-admin', 'Typescript']
		},
		{
			title: 'Hello Contractors',
			description: 'Web application for a client in New Zealand for job posting',
			stackList: ['Nextjs', 'Django', 'REST', 'Algolia', 'Postgres']
		},
		{
			title: 'Bunotan',
			description: 'A white elephant exchange gift application',
			stackList: ['Nextjs', 'Typescript', 'Nestjs', 'REST', 'Postgres']
		},
		{
			title: 'Adobo',
			description: 'Application management with a form builder',
			stackList: ['Reactjs', 'Typescript', 'Fastapi', 'REST', 'MongoDB']
		},
		{
			title: 'Phtore',
			description:
				'Ecommerce app where vendors can track their sales and export relevant details for their tax information details.',
			stackList: ['Reactjs', 'Typescript', 'GraphQL', 'Fastapi', 'MongoDB']
		},
		{
			title: 'ksemilla',
			description:
				'This site. I created a simple CRUD system for my income tax information neede by my accountant. Backend temporarily unavailable.',
			stackList: ['Svelte', 'Typescript', 'Go Chi', 'GraphQL', 'MongoDB']
		},
		{
			title: 'ERP',
			description:
				'Cloud-based solution for enterprise resource planning (ERP). I wanted to create the app my previous company is using and implement the features I know that will make it a better erp.',
			stackList: ['Reactjs', 'Django', 'REST', 'Postgres']
		},

		{
			title: 'Mamala',
			description: 'Intially intended to propose for a company to manage their orders',
			stackList: ['React', 'Django', 'REST', 'Postgres']
		},
		{
			title: 'Aqams',
			description: 'An app for creating quotations',
			stackList: ['React', 'Django', 'REST', 'Postgres']
		}
	];
</script>

<main>
	<h1>Projects</h1>
	<div>
		{#each projects as project}
			<div class="group">
				<h2>{project.title}</h2>
				<p>{project.description}</p>
				<h4>
					<span>Stack:</span>
					{project.stackList.join(', ')}
				</h4>
			</div>
		{/each}
	</div>
</main>

<style>
	main {
		max-width: 700px;
		margin: auto;
		margin-top: 40px;
	}
	h1 {
		font-size: xx-large;
	}
	.group {
		padding: 15px 0px;
	}
	h2 {
		margin: 0;
		padding: 0;
		color: #c4a000;
		font-weight: 300;
	}
	p {
		margin: 5px 0px;
		padding: 0;
	}
	h4 {
		padding: 0;
		margin: 0;
	}
</style>
