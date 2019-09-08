<script>
  import { scene } from './scene-store.js';
  import { fade } from 'svelte/transition';

  let src='assets/brick.png';

  function onClick() {
    if ($scene === 2) {
      scene.set(3);
    }
  }

</script>

{#if $scene < 3}
<div class="lego-brick__wrapper" class:lego-brick--revealed={$scene >= 2} out:fade>
  <button class="lego-brick" on:click={onClick}>  
    <img {src} alt="A lego brick with a play button" />
  </button>
</div>
{/if}


<style>
  .lego-brick__wrapper {
    grid-column: 1;
    grid-row: 1;	
    justify-self: end;
    text-align: right;
   	width: 200px;
		height: 200px;
  }

  .lego-brick {
    border: none;
    margin: 0;
    padding: 0;
    background: none;
    cursor: pointer;
    
  }
  
  .lego-brick--revealed {
    animation: shake 4s linear infinite;
    animation-delay: 1s;
  }

  @keyframes shake {
    0% { transform: translate3d(3px,-3px,0); }
    1% { transform: translate3d(3px,3px,0); }
    2% { transform: translate3d(0,0,0); }
    98% { transform: translate3d(0,0,0); }
    99% { transform: translate3d(3px,3px,0); }
    100% { transform: translate3d(-3px,-3px,0); }
  }
</style>