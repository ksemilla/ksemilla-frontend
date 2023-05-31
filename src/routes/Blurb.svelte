<script lang="ts">
	import { onMount } from 'svelte';

	let typing = true;
	let blurb = '';

	function sleep(time: number) {
		return new Promise((resolve) => setTimeout(resolve, time));
	}

	function getRandomElement(array: number[]) {
		const randomIndex = Math.floor(Math.random() * array.length);
		return array[randomIndex];
	}

	function randomInteger(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	onMount(() => {
		let prevBlurb = "Hi, I'm your friendly neighborhood programmer.";
		const filler = async function () {
			const shuffle = (str: string) => {
				let _str = str;
				let i = 0;
				while (_str === str) {
					_str = [...str].sort(() => Math.random() - 0.5).join('');
					i++;
					if (i === 20) {
						break;
					}
				}
				return _str;
			};
			const mistakeIdx = randomInteger(5, 32);
			const substring = prevBlurb.substring(mistakeIdx, mistakeIdx + randomInteger(4, 7));
			const shuffledString = shuffle(substring);
			await sleep(1500);
			let times = [80, 80, 90, 80, 400];
			for (let i = 0; i < prevBlurb.length; i++) {
				if (i === mistakeIdx) {
					for (let j = 0; j < shuffledString.length; j++) {
						await sleep(getRandomElement(times)).then(() => {
							blurb += shuffledString[j];
						});
					}
					for (let j = 0; j < shuffledString.length; j++) {
						await sleep(250).then(() => {
							blurb = blurb.substring(0, blurb.length - 1);
						});
					}
					for (let j = 0; j < substring.length; j++) {
						await sleep(getRandomElement(times)).then(() => {
							blurb += substring[j];
						});
					}
					for (let j = 0; j < substring.length - 1; j++) {
						i++;
					}
				} else {
					await sleep(getRandomElement(times)).then(() => {
						blurb += prevBlurb[i];
					});
				}
			}
			await sleep(1500).then(() => {
				blurb = blurb.substring(0, blurb.length - 1);
			});
			await sleep(600).then(() => {
				blurb += '!';
			});
			await sleep(3000).then(() => {});
		};
		new Promise((res) => {
			res(filler());
		}).then(() => {
			typing = false;
		});
	});
</script>

<div><span class={typing ? 'active-blurb' : 'blurb'}>{blurb}</span></div>

<style>
	.blurb {
		margin-top: 1.3rem;
		max-width: 400px;
		letter-spacing: -1px;
		height: 22px;
	}
	.active-blurb {
		margin-top: 1.3rem;
		max-width: 400px;
		letter-spacing: -1px;
		height: 22px;
		padding-right: 1px;
		border-right: 2px solid;
		animation: blink 1s forwards infinite;
	}
	@keyframes blink {
		0% {
			border-color: white;
		}
		50% {
			border-color: transparent;
		}
		100% {
			border-color: white;
		}
	}
</style>
