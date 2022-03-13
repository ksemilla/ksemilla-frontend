<script context="module">
  export const prerender = true;
</script>

<script>
  const experiences = [
    {
      company: "Exploration",
      title: "Software Engineer",
      duration: "June 2021 - Present",
      notes: "Written authentication server used for multiple services for internal company use. Write scripts for automation and testing. Research and apply new technologies such as services offered by third-party organizations."
    },
    {
      company: "ExecOS",
      title: "Software Engineer",
      duration: "January 2020 - May 2021",
      notes: "Collaborate with other engineers to design, build, and maintain applications. Integrate new technologies that fit our needs.\nWrite and debug code. Troubleshoot application issues."
    },
    {
      company: "Convoluted Technologies",
      title: "Mechanical Engineer",
      duration: "February 2018 - April 2019",
      notes: "Provide technical support to customers and sales team. Maintain and oversee production to deliver client needs on time. Restorations of critical safety equipment to minimize customer production downtime."
    },
    {
      company: "Concepcion-Carrier",
      title: "Application Engineer",
      duration: "May 2017 - September 2017",
      notes: "Responsible for providing technical support to Sales Engineers to achieve target sales. Attend pre-bid and sales meetings. Manage and interpret customer requirements. Handle cost sheets, quotations, and other needed documentations."
    },
    {
      company: "Philippine Batteries Incorporated",
      title: "Cadet Engineer",
      duration: "July 2016 - January 2017",
      notes: "Special projects on Energy Efficiency Management. Project lead for migration to Hybrid Solar ACU and Waste Heat Recovery System. Handled project cost and savings evaluation for air conditioning of the rectifier room. Research on the possibility of using slag blocks as replacement for acid bricks."
    }
  ]
</script>

<main class="max-w-5xl m-auto p-8">
  <h1 class="text-3xl font-medium text-blue-600 mb-4 text-center font-semibold">Experience</h1>
  <div class="grid grid-cols-1 divide-y divide-ubuntu-gray space-y-6">
    {#each experiences as experience}
      <div class="pt-4">
        <h2 class="text-2xl font-medium text-custom">{experience.company}</h2>
        <h2 class="text-ubuntu-gold text-xl mb-2">{experience.title}</h2>
        <h4 class="mb-4 font-bold">{experience.duration}</h4>
        <p class="whitespace-pre-wrap">{experience.notes}</p>
      </div>
    {/each}
  </div>
</main>