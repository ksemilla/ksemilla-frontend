<main class="max-w-5xl m-auto p-8">
  <h1 class="text-3xl font-medium text-blue-600 mb-4 text-center font-semibold">Projects</h1>
  <div class="container">
    {#each projects as project}
      <div class="item pb-4 mb-6">
        <h2 class="text-2xl font-medium mb-2">{project.title}</h2>
        <p class="notes">{project.description}</p>
        <h4 class="duration mt-2">
          <span class="font-semibold">Stack:</span> {project.stackList.join(", ")}
        </h4>
        
      </div>
    {/each}
  </div>
</main>

<style>
  main {
    text-align: left;
    max-width: 800px;
    margin: auto;
  }

  .item {
    border-bottom: 1px solid rgb(128, 115, 1);
  }

  .item:last-child {
    border-bottom: none;
  }

</style>

<script>
  const projects = [
    {
      title: "ERP",
      description: "Cloud-based solution for enterprise resource planning (ERP). This is currently what I'm doing during my spare time.",
      stackList: ["React", "Django", "REST", "Postgres"]
    },
    {
      title: "ksemilla",
      description: "This site. I create a simple CRUD system for my income tax information needed by my accountant. Currently loving the stack I used.",
      stackList: ["Svelte", "Go", "GraphQL", "MongoDB"]
    },
    {
      title: "Hello Contractors",
      description: "Web application for a client in New Zealand for job posting",
      stackList: ["Nextjs", "Django", "REST", "Algolia", "Postgres"]
    }
    ,
    {
      title: "Mamala",
      description: "Ordering system intended to a company.",
      stackList: ["React", "Django", "REST", "Postgres"]
    }
    ,
    {
      title: "Aqams",
      description: "After learning web development, my friend and I made our first project together to apply what we have learned and we decided to make an application on how their company makes quotations",
      stackList: ["React", "Django", "REST", "Postgres"]
    }
  ]
</script>