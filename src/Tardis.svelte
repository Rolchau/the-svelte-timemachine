<script>
	import { onDestroy, createEventDispatcher } from 'svelte';
	export let start = false;

	const dispatch = createEventDispatcher();

	let visible = false;
	const pixelSize = '0.5';

	function getPixel(x, y, color='#000') {
    return x * pixelSize + 'rem ' + y * pixelSize + 'rem 0 ' + color + ','
  }

	function generateShadow(pixels) {
		let shadowStr = '';
		pixels.forEach((elms, y) => {
			elms.forEach((elm, x) => {
				switch (elm) {
					case 1:
						shadowStr += getPixel(x, y)
						break;
					case 2: 
						shadowStr += getPixel(x, y, '#FFF')
						break;
					case 3: 
						shadowStr += getPixel(x, y, '#426899')
						break;
					default:
						break;
				}
			});
		});
		return shadowStr.substring(0, shadowStr.length - 1);
	}
	
	const tardisPixels = [
		[0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0], 
		[0, 0, 0, 0, 0, 1, 1, 2, 1, 1, 0, 0, 0, 0, 0],
		[0, 0, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 0, 0],
		[0, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 0],
		[0, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 3, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 3, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[0, 1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1, 0],
		[0, 1, 3, 2, 2, 2, 3, 1, 3, 2, 2, 2, 3, 1, 0],
		[0, 1, 3, 2, 2, 2, 3, 1, 3, 2, 2, 2, 3, 1, 0],
		[0, 1, 3, 2, 2, 2, 3, 1, 3, 2, 2, 2, 3, 1, 0],
		[0, 1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1, 0],
		[0, 1, 3, 2, 2, 2, 3, 1, 3, 1, 1, 1, 3, 1, 0],
		[0, 1, 3, 2, 2, 2, 3, 1, 3, 3, 3, 1, 3, 1, 0],
		[0, 1, 3, 2, 2, 2, 3, 1, 3, 3, 3, 1, 3, 1, 0],
		[0, 1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1, 0],
		[0, 1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 0],
		[0, 1, 3, 3, 3, 1, 3, 1, 3, 3, 3, 1, 3, 1, 0],
		[0, 1, 3, 3, 3, 1, 3, 1, 3, 3, 3, 1, 3, 1, 0],
		[0, 1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1, 0],
		[0, 1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 0],
		[0, 1, 3, 3, 3, 1, 3, 1, 3, 3, 3, 1, 3, 1, 0],
		[1, 1, 3, 3, 3, 1, 3, 1, 3, 3, 3, 1, 3, 1, 1],
		[1, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	];
	
	const shadowArr = generateShadow(tardisPixels).split(',');
	let boxShadowString = '';
	
	function makeBoxShadow() {
		let promise =	new Promise((resolve, reject) => {
			let counter = 0;
			let timer = setInterval(() => {
				if (counter === shadowArr.length) {
					clearInterval(timer);
					boxShadowString = shadowArr.slice(0, counter).join(',');
					dispatch('done-drawing');
					resolve('Done drawing');
				} else {
					boxShadowString = shadowArr.slice(0, counter).join(',');
					counter++;					
				}
			}, 10);
		});
		return promise;
	}
	let promise;
	
	function handleClick() {
		console.log('visible: ', visible);
		if (!visible) {
			promise = makeBoxShadow();
		}
	}
</script>

{#if start}
{#await makeBoxShadow() then }
	<img class="pointing-finger" alt="Finger pointing left" src="assets/point-left.svg" />
{/await}
<div class="tardis-wrapper" on:click>
	<div class="tardis-top" style="box-shadow:{boxShadowString}"></div>
</div>
{/if}

<style>
  :root {
    --pixelSize: 0.5rem;
		--pixelCountX: 14;
		--pixelCount: 27;
  }
  .tardis-wrapper {
		min-height: calc(var(--pixelSize) * var(--pixelCount));
		min-width: calc(var(--pixelSize) * var(--pixelCountX));
		cursor: pointer;    
  }

	.tardis-top {
		height: var(--pixelSize);
		width: var(--pixelSize);
	}

	.pointing-finger {
		width: 3rem;
    height: 3rem;
		position: absolute;
    right: 0;
    top: 50%;
		transform: translateX(100%);
		filter: blur(10px);
		animation: blur-in 0.5s ease-in-out 1 forwards, point 0.5s ease-in-out infinite;
	}

	@keyframes blur-in {
		0% {
			filter: blur(10px);
		}
		100% {
			filter: blur(0px);
		}
	}

	@keyframes point {
		25% {
			transform: translateX(90%);
		}
		75% {
			transform: translateX(110%);
		}
	}
</style>