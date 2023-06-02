<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	let links = [
		{
			href: '#about',
			label: 'About',
			styles: {
				transform: 'translateX(-30px)',
				display: 'flex',
				'column-gap': '10px',
				color: '#839496',
				'transition-duration': '0.3s'
			}
		},
		{
			href: '#experience',
			label: 'Experience',
			styles: {
				transform: 'translateX(-30px)',
				display: 'flex',
				'column-gap': '10px',
				color: '#839496',
				'transition-duration': '0.3s'
			}
		},
		{
			href: '#projects',
			label: 'Projects',
			styles: {
				transform: 'translateX(-30px)',
				display: 'flex',
				'column-gap': '10px',
				color: '#839496',
				'transition-duration': '0.3s'
			}
		},
		{
			href: '#skills',
			label: 'Skills',
			styles: {
				transform: 'translateX(-30px)',
				display: 'flex',
				'column-gap': '10px',
				color: '#839496',
				'transition-duration': '0.3s'
			}
		}
	];
	let scrollPosition = 0;
	let isScrolling: boolean | null = null;
	onMount(() => {
		let timeout: NodeJS.Timeout;
		function handleScroll() {
			scrollPosition = window.scrollY;
		}

		function handleScroll2() {
			isScrolling = true;

			clearTimeout(timeout);
			timeout = setTimeout(() => {
				isScrolling = false;
			}, 150);
		}

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('scroll', handleScroll2);
		switch ($page.url.hash) {
			case '#experience':
				handleClick(1);
				break;
			case '#projects':
				handleClick(2);
				break;
			case '#skills':
				handleClick(3);
				break;
			default:
				handleClick(0);
				break;
		}
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('scroll', handleScroll2);
		};
	});

	$: {
		if (!isScrolling && isScrolling !== null) {
			if (scrollPosition > 1400) {
				handleClick(3);
			} else if (scrollPosition > 950) {
				handleClick(2);
			} else if (scrollPosition > 250) {
				handleClick(1);
			} else {
				handleClick(0);
			}
		}
	}

	$: cssVarStyles = (i: number) =>
		Object.entries(links[i].styles)
			.map(([key, value]) => `${key}:${value}`)
			.join(';');

	const setActive = (i: number) => {
		links = links.map((l, idx) => {
			if (idx === i && $page.url.hash !== l.href) {
				return {
					...l,
					styles: {
						...l.styles,
						transform: 'translateX(-10px)',
						color: 'white'
					}
				};
			} else return l;
		});
	};

	const setInactive = (i: number) => {
		links = links.map((l, idx) => {
			if (idx === i && $page.url.hash !== l.href) {
				return {
					...l,
					styles: {
						...l.styles,
						transform: 'translateX(-30px)',
						color: '#839496'
					}
				};
			} else return l;
		});
	};

	const handleClick = (i: number) => {
		isScrolling = true;
		links = links.map((l, idx) => {
			if (idx === i) {
				return {
					...l,
					styles: {
						...l.styles,
						transform: 'translateX(-10px)',
						color: 'white'
					}
				};
			} else {
				return {
					...l,
					styles: {
						...l.styles,
						transform: 'translateX(-30px)',
						color: '#839496'
					}
				};
			}
		});
	};
</script>

<nav>
	{#each links as link, i}
		<div>
			<a href={link.href}>
				<div class="link-container">
					<div
						style={cssVarStyles(i)}
						on:mouseenter={() => setActive(i)}
						on:mouseleave={() => setInactive(i)}
					>
						<div class="dash">
							<div class="ubox" />
							<div class="lbox" />
						</div>
						<p>{link.label}</p>
					</div>
				</div>
			</a>
		</div>
	{/each}
</nav>

<style>
	a {
		display: inline-block;
		text-decoration: none;
		color: rgb(145, 144, 144);
	}
	.dash {
		min-width: 50px;
		display: flex;
		flex-direction: column;
	}
	.link-container {
		overflow: hidden;
	}

	.ubox {
		border-bottom: 1px solid;
		flex: 1;
	}
	.lbox {
		border-top: 1px solid;
		flex: 1;
	}
	p {
		padding: 0;
		margin: 0;
	}
	@media (max-width: 1024px) {
		nav {
			display: none;
		}
	}
</style>
