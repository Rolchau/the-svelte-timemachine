<script>
  import { scene } from './scene-store.js';
  import { onMount } from 'svelte';
  import { sineOut } from 'svelte/easing';
  import { fade } from 'svelte/transition';

  export let visible = false;

  let srcStale = 'assets/mr-computer-stale.gif';
  let srcMoving = 'assets/mr-computer-moving.gif';
  $:sliding = visible;
  $:slowSliding = !sliding;

  function movingDone() {
    if (!sliding) {
      scene.set(1);
    } 
    sliding = false;
  };

  function slidein(node, { delay = 1000, duration = 1400, distance=300, units='%'}) {
		return {
      delay,
			duration,
			css: (t, u) => {
				const eased = sineOut(u);
				return `
          transform: translateX(${eased * -distance}${units});
        `
			}
    };
  }  
</script>

{#if visible && $scene <= 2}
<div class="computer__wrapper" in:slidein on:introend={movingDone} out:fade>
  {#if sliding}
  <img 
    class="computer" 
    src={srcStale} 
    alt="A moving orange computer" 
  />
  {:else}
  <img 
    class="computer computer_blowing" 
    src={srcMoving} 
    in:slidein="{{delay: 0, duration: 300, distance: 20, units: 'px'}}"
    on:introend={movingDone}
    alt="A orange computer blowing air" 
  />
  {/if}
</div>
{/if}

<style>
  .computer {
    height: 100%;
    width: 100%;
    max-width: 100%;
    image-rendering: pixelated;
  } 

  .computer_blowing {
    position: absolute;
    top: 0;
    left: 20px;
  }

  .computer__wrapper {
    height: 100px;
    width: 100px;
    min-width: 100px;
    position: relative;
    align-self: flex-start;
  }

  @media only screen and (min-width: 410px) {
    .computer__wrapper {
      height: 200px;
      width: 200px;
    }
  }
</style>