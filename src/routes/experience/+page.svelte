<script context="module">
	export const prerender = true;
</script>

<script>
	const experiences = [
		{
			company: 'Exploration',
			title: 'Software Engineer',
			duration: 'June 2021 - Present',
			notes:
				'Built RESTful APIs for authentication, permissions, and microservices. Write and test code, refining and rewriting it as necessary. Dockerized developers environment for multiple services. Maintain and develop  web app both frontend (React) and backend (Django).'
		},
		{
			company: 'ExecOS',
			title: 'Software Engineer',
			duration: 'January 2020 - May 2021',
			notes:
				'Built a payment gateway for a startup company using Stripe.  Developed the web app as a full stack for business management using React and Django primarily. Researched and created a retirement plan through the efforts of cryptocurrency.'
		},
		{
			company: 'Convoluted Technologies',
			title: 'Mechanical Engineer',
			duration: 'February 2018 - April 2019',
			notes:
				'Provide technical support for customers and the sales team. Maintain and oversee production to deliver client needs on time. Lead restorations of critical safety equipment to minimize customer production downtime.'
		},
		{
			company: 'Concepcion-Carrier',
			title: 'Application Engineer',
			duration: 'May 2017 - September 2017',
			notes:
				'Responsible for providing immediate technical support for Sales Engineers to achieve target sales. Attend pre-bid and sales meetings. Manage and interpret customer requirements. Handle cost sheets, quotations, and other needed documentation.'
		},
		{
			company: 'Philippine Batteries Incorporated',
			title: 'Cadet Engineer',
			duration: 'July 2016 - January 2017',
			notes:
				'Special projects on Energy Efficiency Management. Project lead for migration to Hybrid Solar ACU and Waste Heat Recovery System. Handled project cost and savings evaluation for air conditioning of the rectifier room. Research on the possibility of using slag blocks as replacement for acid bricks.'
		}
	];
</script>

<section class="max-w-5xl m-auto p-8">
	<h1 class="text-3xl font-medium text-blue-600 mb-4 text-center">Experience</h1>
	<div class="grid grid-cols-1 divide-y divide-gray-500 space-y-6 text-primary">
		{#each experiences as experience}
			<div class="pt-4">
				<h2 class="text-2xl font-medium">{experience.company}</h2>
				<h2 class="text-ubuntu-gold text-xl mb-2">{experience.title}</h2>
				<h4 class="mb-4 font-bold">{experience.duration}</h4>
				<p class="whitespace-pre-wrap">{experience.notes}</p>
			</div>
		{/each}
	</div>
</section>
