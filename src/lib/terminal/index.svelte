<script>
  import {clickOutside} from "$lib/clickOutside"

  let keyCode;
  let pwd = "~"

  let messages = [
    {query: "  "},
    {query: "  ======================================================"},
    {query: "  ||  _       __________    __________  __  _________ ||"},
    {query: "  || | |     / / ____/ /   / ____/ __ \\/  |/  / ____/ ||"},
    {query: "  || | | /| / / __/ / /   / /   / / / / /|_/ / __/    ||"},
    {query: "  || | |/ |/ / /___/ /___/ /___/ /_/ / /  / / /___    ||"},
    {query: "  || |__/|__/_____/_____/\\____/\\____/_/  /_/_____/    ||"},
    {query: "  ||                                                  ||"},
    {query: "  ======================================================"},
    {query: "  "},
    {query: "Additional commands:"},
    {query: "      ls            -list directory"},
    {query: "      cd <dir>      -change directory"},
    {query: "      cat <file>    -display file content"},
    {query: "      clear         -clear :)"},
    {query: "  "},
  ]
  let query = "";
  let prevQuery = ""
  let inletIdx = 0
  let firstPart = ""
  let secondPart = ""
  let queryInput;
  let isActive = false

  let pwdList = ['~']
  let directory = {
    "~": {
      "Readme": "This site is running using Svelte, GraphQL, and Go\nThis is pure javascript. It's not connected to any shell",
      "experience": "Exploration \\ Software Engineer\nExecOS \\ Software Engineer\nConvoluted Technologies \\ Mechanical Engineer\nConcepcion-Carrier \\ Application Engineer\nPhilippine Batteries Inc \\ Cadet Engineer",
      "skills": "Python         Django           Typescript\nGolang         Restful API      Svelte\nJavascript     Reactjs          GraphQL\nMongoDB        Postgres         AWS\nHTML           CSS              Solidity",
      "projects": {
        "hello-contractors": "site: app.hellocontractors.co.nz\nfrontend: Nextjs\nbackend: Django",
      },
    }
  }


  const init = () => {
    queryInput.focus()
    isActive = true
  }

  function handleKeydown(event) {
		if (isActive) {
      key = event.key;
		keyCode = event.keyCode;
    if (keyCode === 37) {
      if (inletIdx > 0) inletIdx -= 1
    } else if (keyCode === 39) {
      if (inletIdx < query.length) inletIdx += 1
    } else if (keyCode === 13) {
      if (query === "clear") {
        messages = []
      } else if (query === "ls") {
        let currDir = directory
        pwdList.forEach(dir => {
          currDir = currDir[dir]
        })
        let data = Object.keys(currDir)
        messages = [
          ...messages, {
            input: true,
            query: query,
            isDir: false,
            pwd
          },
          ...data.map(item => {
            return {
              input: false,
              query: item,
              isDir: typeof currDir[item] === "object",
              pwd
            }
          })
        ]
      } else if (query.substring(0,2) === "cd") {
        const [action, params] = query.split(" ", 2)
        messages = [...messages, {
          input: true,
          query,
          isDir: false,
          pwd
        }]
        let currDir = directory
        pwdList.forEach(dir => {
          currDir = currDir[dir]
        })
        let keys = Object.keys(currDir)

        if (params === "~") {
          pwd = "~"
          pwdList = ["~"]
        }

        if (keys.includes(params)) {
          pwd = pwd + "/" + params
          pwdList = [...pwdList, params]
        } else if (params === "..") {
          if (pwd != "~") {
            let newPwdList = pwdList.slice(0,pwdList.length - 1)
            pwd = newPwdList.join("/")
            pwdList = newPwdList
          }
          
        }
      } else if (query.substring(0,4) === "cat ") {
        console.log("noice")
        const [action, params] = query.split(" ", 2)
        messages = [...messages, {
          input: true,
          query,
          isDir: false,
          pwd
        }]
        let currDir = directory
        pwdList.forEach(dir => {
          currDir = currDir[dir]
        })
        console.log(currDir[params])
        if (typeof currDir[params] === "string") {
          messages = [...messages, {
            input: false,
            query: currDir[params],
            isDir: false,
            pwd
          }]
        }
      } else {
        messages = [...messages, {
          input: true,
          query,
          isDir: false,
          pwd
        }]
      }
      query = ""
      inletIdx = 0
    } else {
      inletIdx += 1
    }
    }
	}
  $: {
    for (const [index, element] of [...query].entries()) {
      if (element != query[index]) {
        break
      }
    }
    firstPart = query.substring(0,inletIdx)
    secondPart = query.substring(inletIdx)
    prevQuery = query
  }
</script>

<svelte:window on:keydown={handleKeydown}/>

<main on:click={()=>init()} use:clickOutside on:click_outside={()=>{
  isActive = false
}}>

  {#each messages as message }
    <div class="message">
      {#if message.input}
        <span class="tag">ksemilla@127.0.0.1</span>:<span class="tilde">{message.pwd}</span>$ {` `} <span class="message-query">{message.query}</span>
      {:else}
        {#if message.isDir}
          <div class="dir">{message.query}</div>
        {:else}
          <div class="message-query">{message.query}</div>
        {/if}
      {/if}
    </div>
  {/each}

  <input class="my-input" bind:value={query} bind:this={queryInput}/>
  <div>
    <span class="tag">ksemilla@127.0.0.1</span>:<span class="tilde">{pwd}</span>$&nbsp;{#each [...firstPart].slice(0, firstPart.length-1) as letter}<span>{letter}</span>{/each}{firstPart.charAt(firstPart.length-1)}<span class="inlet-container"><span class="inlet" style="--my-opacity: {isActive ? 1: 0}" /></span>{#each [...secondPart] as letter}<span>{letter}</span>{/each}
  </div>
</main>

<style>
  main {
    text-align: left;
    height: 100%;
    position: relative;
  }

  .message {
    margin-bottom: 2px;
  }

  .message-query {
    white-space: pre;
  }

  .dir {
    color: #3465A4;
    font-weight: 900;
  }

  .my-input {
    position: absolute;
    z-index: 0;
    opacity: 0;
  }

  .tag {
    color: #4E9A06;
    font-weight: 600;
    font-size: 14px;
  }

  .tilde {
    color: #3465A4;
    font-weight: 800;
  }

  @keyframes inletBlink {
    0% { color: #002B36 }
    50% { color: #839496 }
    100% { color: #002B36 }
  }

  .inlet-container{
    display: inline-block;
    width: 0px;
  }

  .inlet {
    color: #839496;
    animation-name: inletBlink;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
    opacity: var(--my-opacity);
    border-right: 1px solid;
  }

</style>