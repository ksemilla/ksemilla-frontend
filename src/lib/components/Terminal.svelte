<script lang="ts">
	import { afterUpdate, onDestroy, onMount } from 'svelte';
	import { useTerminal } from '$lib/stores';

	let prefix = 'kevin@website';
	let inputElement: HTMLInputElement;
	let terminalDiv: HTMLDivElement | null = null;
	const helpMessages: { showPrefix: boolean; dir: string; content: string }[] = [
		{ showPrefix: false, dir: '~', content: ' ' },
		{ showPrefix: false, dir: '~', content: 'available commands:' },
		{ showPrefix: false, dir: '~', content: '   ls         - List files in current directory' },
		{ showPrefix: false, dir: '~', content: '   cd <dir>   - Change current directory' },
		{ showPrefix: false, dir: '~', content: '   cat <file> - Show contents of a .txt file' },
		{ showPrefix: false, dir: '~', content: '   exit       - Exit terminal mode' },
		{ showPrefix: false, dir: '~', content: '   help       - Show this options again' },
		{ showPrefix: false, dir: '~', content: ' ' }
	];
	let messages: { showPrefix: boolean; dir: string; content: string | HTMLElement }[] = [
		{ showPrefix: false, dir: '~', content: ' ' },
		{ showPrefix: false, dir: '~', content: ' ' },
		{ showPrefix: false, dir: '~', content: ' ' },
		{ showPrefix: false, dir: '~', content: '    | | /| / / __/ /  / ___/ __ \\/  |/  / __/' },
		{ showPrefix: false, dir: '~', content: '    | |/ |/ / _// /__/ /__/ /_/ / /|_/ / _/  ' },
		{ showPrefix: false, dir: '~', content: '    |__/|__/___/____/|___/|____/_/  /_/___/  ' },
		{ showPrefix: false, dir: '~', content: ' ' },
		{ showPrefix: false, dir: '~', content: ' ' },
		...helpMessages
	];
	let message = '';
	const directory: { [key: string]: { type: string; name: string }[] } = {
		'~': [
			{ type: 'dir', name: 'Experience' },
			{ type: 'dir', name: 'Projects' },
			{ type: 'txt', name: 'Skills' },
			{ type: 'txt', name: 'readme.txt' }
		],
		'~/Experience/': [
			{ type: 'txt', name: 'Exploration' },
			{ type: 'txt', name: 'ExecOS' },
			{ type: 'txt', name: 'Convoluted Technologies' },
			{ type: 'txt', name: 'Concepcion-Carrier' },
			{ type: 'txt', name: 'PBI' }
		],
		'~/Projects/': [
			{ type: 'txt', name: 'Intervengine' },
			{ type: 'txt', name: 'Hello-Contractors' },
			{ type: 'txt', name: 'Bunotan' },
			{ type: 'txt', name: 'Adobo' },
			{ type: 'txt', name: 'Phtore' },
			{ type: 'txt', name: 'ksemilla' },
			{ type: 'txt', name: 'ERP' },
			{ type: 'txt', name: 'Mamala' },
			{ type: 'txt', name: 'Aqams' }
		],
		'~/Skills/': []
	};

	const contents: { [key: string]: string } = {
		'readme.txt': 'This is just pure javascript. Not connected to any shell.',
		Skills: `Python
Javascript
Golang
Django
Fastapi
Reactjs
Typescript
Nextjs
React-admin
Svelte
Angular
Nodejs
Nestjs
Go Chi
REST
GraphQL
Postgres
MongoDB
Ubuntu
Linux
`,
		Exploration: `Title: Software Engineer
Duration: June 2021 - Present
Address: California, USA (Remote)
Description: Built RESTful APIs for authentication, permissions, and microservices. Write and test code, refining and rewriting it as necessary. Dockerized developers environment for multiple services. Maintain and develop web app both frontend (React) and backend (Django)
`,
		ExecOS: `Title: Software Engineer
Duration: January 202 - May 2021
Address: TENNESSEE, USA (Remote)
Description: Built a payment gateway for a startup company using Stripe. Developed the web app as a full stack for business management using React and Django primarily. Researched and created a retirement plan through the efforts of cryptocurrency
`,
		'Convoluted Technologies': `Title: Mechanical Engineer
Duration: February 2018 - April 2019
Address: SYDNEY, AUSTRALIA
Description: Provide technical support for customers and the sales team. Maintain and oversee production to deliver client needs on time. Lead restorations of critical safety equipment to minimize customer production downtime.
`,
		'Concepcion-Carrier': `Title: Application Engineer
Duration: March 2017 - September 2017
Address: ALABANG, PHILIPPINES
Description: Responsible for providing immediate technical support for Sales Engineers to achieve target sales. Attend pre-bid and sales meetings. Manage and interpret customer requirements. Handle cost sheets, quotations, and other needed documentation.
`,
		PBI: `Title: Plant Engineer
Duration: July 2016 - January 2017
Address: BULACAN, PHILIPPINES
Description: Lead special projects on Energy Efficiency Management including Hybrid Solar ACUs and waste heat recovery system. Handled project cost and savings evaluation for air conditioning of the rectifier room. Research on the possibility of using slag blocks as replacement for acid bricks.
`,
		Bunotan: `Description: White elephant exchange gift app 
Stack: Nextjs, Typescript, Nestjs, REST, Postgres
`,
		Adobo: `Description: Application management with form builder 
Stack: Reactjs, Typescript, Fastapi, REST, MongoDB
`,
		Phtore: `Description: E-commerce application with simple business management (orders, invoices, inventory, etc.) 
Stack: Reactjs, Typescript, Fastapi, GraphQL, MongoDB
`,
		ksemilla: `Description: This site. I created a simple CRUD system for my income tax information neede by my accountant. Backend temporarily unavailable.
Stack: Svelte, Typescript, Go Chi, GraphQL, MongoDB
`,
		ERP: `Description: Cloud-based solution for enterprise resource planning (ERP) 
Stack: Reactjs, Django, REST, Postgres
`,
		'Hello-Contractors': `Description: Web application for a client in New Zealand for job posting 
Stack: Nextjs, Django, REST, Algolia, Postgres
`,
		Mamala: `Description: Intially intended to propose for a company to manage their orders 
Stack: Reactjs, Django, REST, Postgres
`,
		Aqams: `Description: Quotation app 
Stack: Reactjs, Django, REST, Postgres
`,
		Intervengine: `Description: Health management system. I am designated in frontend for this project for a client in New Zealand
Stack: Reactjs, React-admin, Typescript
`
	};

	let dir = '~';

	const commands: string[] = ['exit', 'ls', 'cd', 'cat', 'help'];

	function createNode(path: string) {
		let node: HTMLElement = document.createElement('div');
		directory[path].forEach((c) => {
			let childNode = document.createElement('div');
			childNode.textContent = c.name;
			childNode.style.color = c.type === 'dir' ? '#729FCF' : '';
			node.appendChild(childNode);
		});
		node.style.display = 'flex';
		node.style.columnGap = '20px';
		node.style.flexWrap = 'wrap';
		return node;
	}

	function handleEnterKey(e: KeyboardEvent) {
		const [action, ...rest] = message.trim().replace(/  +/g, ' ').split(' ');
		if (e.key === 'Enter') {
			messages = [...messages, { showPrefix: true, dir: dir, content: message }];

			if (!commands.includes(action.toLowerCase())) {
				messages = [
					...messages,
					{ showPrefix: false, dir: dir, content: `bash: ${action}: command not found` }
				];
				message = '';
			} else {
				switch (action) {
					case 'exit':
						useTerminal.set(false);
						message = '';
						break;
					case 'help':
						messages = [...messages, ...helpMessages];
						message = '';
						break;
					case 'ls':
						if (rest.length > 0) {
							messages = [
								...messages,
								{
									showPrefix: false,
									dir: dir,
									content: 'bash: ls: cannot have arguments'
								}
							];
						} else {
							messages = [
								...messages,
								{
									showPrefix: false,
									dir: dir,
									content: createNode(dir)
								}
							];
						}
						message = '';
						break;
					case 'cd':
						if (rest.length > 1) {
							messages = [
								...messages,
								{
									showPrefix: false,
									dir: dir,
									content: 'bash: cd: too many arguments'
								}
							];
						} else if (rest.length === 0) {
							message = '';
						} else {
							const toDir = rest[0];
							if (toDir === '~') {
								dir = '~';
							} else if (toDir === '..') {
								let _dir = dir.split('/');
								_dir = _dir.splice(0, _dir.length - 2);
								dir = _dir.join('/');
								if (dir === '') dir = '~';
							} else if (!directory[dir].map((_d) => _d.name).includes(toDir)) {
								messages = [
									...messages,
									{
										showPrefix: false,
										dir: dir,
										content: `bash: cd: ${toDir}: No such file or directory`
									}
								];
							} else {
								let newDir = directory[dir].find((d) => d.name === toDir);
								if (newDir?.type === 'txt') {
									messages = [
										...messages,
										{
											showPrefix: false,
											dir: dir,
											content: `bash: cd: ${toDir}: not a directory`
										}
									];
								} else {
									dir = dir + '/' + toDir + '/';
								}
							}
						}
						message = '';
						break;
					case 'cat':
						if (rest.length === 0) {
							messages = [
								...messages,
								{
									showPrefix: false,
									dir: dir,
									content: `bash: cat: file name is required
                    `
								}
							];
						} else if (rest.length > 1) {
							messages = [
								...messages,
								{
									showPrefix: false,
									dir: dir,
									content: `bash: cat: cannot have more than 1 argument`
								}
							];
						} else {
							let fileName = rest[0];
							let _file = directory[dir].find((d) => d.name === fileName);
							if (!directory[dir].map((d) => d.name).includes(fileName)) {
								messages = [
									...messages,
									{
										showPrefix: false,
										dir: dir,
										content: `bash: cat: file name does not exist`
									}
								];
							} else if (_file?.type !== 'txt') {
								messages = [
									...messages,
									{
										showPrefix: false,
										dir: dir,
										content: `cat: ${fileName} Is a directory`
									}
								];
							} else {
								messages = [
									...messages,
									{
										showPrefix: false,
										dir: dir,
										content: contents[fileName]
									}
								];
							}
						}
						message = '';
						break;
				}
				message = '';
			}
		} else if (e.ctrlKey && e.key === 'l') {
			messages = [];
		} else if (e.key === 'Tab') {
			e.preventDefault();
			if (action === 'cd' || action === 'cat') {
				if (rest.length === 1) {
					let arg = rest[0];
					const elements = directory[dir].filter((d) => d.name.includes(arg));
					if (elements.length === 1) {
						message = `${action} ${elements[0].name}`;
					}
				}
			}
		}
	}

	onMount(() => {
		scrollToBottom();
	});

	afterUpdate(() => {
		scrollToBottom();
	});

	function scrollToBottom() {
		if (terminalDiv) {
			terminalDiv.scrollTop = terminalDiv.scrollHeight;
		}
	}

	function handleBlur() {
		inputElement.focus();
	}

	function handleVisibilityChange() {
		if (!document.hidden) {
			inputElement.focus();
		}
	}

	onMount(() => {
		if (typeof window !== 'undefined')
			document.addEventListener('visibilitychange', handleVisibilityChange);
		inputElement.focus();
	});

	onDestroy(() => {
		if (typeof window !== 'undefined')
			document.removeEventListener('visibilitychange', handleVisibilityChange);
	});
</script>

<div class="terminal" bind:this={terminalDiv}>
	{#each messages as text}
		<div style="display: flex;">
			{#if text.showPrefix}
				<span class="prefix">{prefix}</span>
				<span>:</span>
				<span class="dir">{text.dir}</span>
				<span>$&nbsp;</span>
			{/if}

			{#if typeof text.content === 'string'}
				<span class="text">
					{text.content}
				</span>
			{:else}
				<span class="content">{@html text.content.outerHTML}</span>
			{/if}
		</div>
	{/each}
	<div style="display: flex; margin-bottom: 20px">
		<span class="prefix">{prefix}</span>
		<span>:</span>
		<span class="dir">{dir}</span>
		<span>$&nbsp;</span>
		<span>
			<input
				bind:this={inputElement}
				on:keydown={handleEnterKey}
				bind:value={message}
				class="terminal-input"
				on:blur={handleBlur}
			/>
		</span>
	</div>
</div>

<style>
	.terminal {
		background-color: #002b36;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		padding: 2px;

		color: white;
		overflow-y: auto;
		color: #839496;
	}

	.terminal-input {
		background-color: #002b36;
		border: none;
		caret-color: white;
		color: white;
		font-family: 'Fira Mono', monospace;
		font-size: 15px;
		padding: 0;
		margin: 0;
		font-weight: 100;
		width: 100%;
		color: #839496;
	}

	.terminal-input:focus {
		outline: none;
	}

	.text {
		font-size: 15px;
		font-weight: 100;
		margin: 0;
		padding: 1px 0px;
		color: #839496;
		white-space: pre-wrap;
		font-family: 'Fira Mono', monospace;
	}

	.content {
		font-size: 15px;
		font-weight: 100;
		margin: 0;
		padding: 1px 0px;
		color: #839496;
		white-space: pre;
		font-family: 'Fira Mono', monospace;
	}

	.prefix {
		color: #8ae234;
	}

	.dir {
		color: #729fcf;
	}
</style>
