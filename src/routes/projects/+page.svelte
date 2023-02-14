<script context="module">
	export const prerender = true;
</script>

<script>
	const projects = [
		{
			title: 'Intervengine',
			description:
				'Health management system. I am designated in frontend for this project for a client in New Zealand',
			stackList: ['React', 'React-admin', 'Typescript']
		},
		{
			title: 'Phtore',
			description:
				'Ecommerce app where vendors can track their sales and export relevant details for their tax information details.',
			stackList: ['React', 'Typescript', 'GraphQL', 'Fastapi', 'MongoDB']
		},
		{
			title: 'ERP',
			description:
				'Cloud-based solution for enterprise resource planning (ERP). I wanted to create the app my previous company is using and implement the features I know that will make it a better erp.',
			stackList: ['React', 'Django', 'REST', 'Postgres']
		},
		{
			title: 'ksemilla',
			description:
				'This site. I created a simple CRUD system for my income tax information needed by my accountant. Currently loving the stack I used.',
			stackList: ['Svelte', 'Go', 'GraphQL', 'MongoDB']
		},
		{
			title: 'Hello Contractors',
			description: 'Web application for a client in New Zealand for job posting',
			stackList: ['Nextjs', 'Django', 'REST', 'Algolia', 'Postgres']
		},
		{
			title: 'Mamala',
			description: 'Ordering system intended to a company.',
			stackList: ['React', 'Django', 'REST', 'Postgres']
		},
		{
			title: 'Aqams',
			description:
				'After learning web development, my friend and I made our first project together to apply what we have learned and we decided to make an application on how their company makes quotations',
			stackList: ['React', 'Django', 'REST', 'Postgres']
		}
	];
</script>

<main class="max-w-5xl m-auto p-8">
	<h1 class="text-3xl font-medium text-blue-600 mb-4 text-center">Projects</h1>
	<div class="divide-y space-y-8 divide-gray-500 text-primary">
		{#each projects as project}
			<div class="pt-4">
				<h2 class="text-2xl font-medium mb-2 text-ubuntu-darkgreen">{project.title}</h2>
				<p class="notes">{project.description}</p>
				<h4 class="duration mt-2 text-ubuntu-lightblue">
					<span class="font-semibold">Stack:</span>
					{project.stackList.join(', ')}
				</h4>
			</div>
		{/each}
	</div>
</main>
