<script>
  import { scene } from './scene-store.js';
  import { fade } from 'svelte/transition';
  import LegoFigure from './LegoFigure.svelte';

  function typewriter(node, {speed = 50}) {
    const text = node.textContent;
    const duration = text.length * speed;

    return {
      duration,
      tick: t => {
        const i = Math.floor(text.length * t);
        node.textContent = text.slice(0, i);
      }
    };
  }
</script>

{#if $scene >= 3 && $scene < 7} 
<div class="monitor" in:fade out:fade on:introend={() => scene.set(4)} >
  <div class="monitor__glass">
    {#if $scene === 4}
      <p in:typewriter|local={{speed: 80}} on:introend={() => scene.set(5)}>
        Hi Lego, thank you very much for your time. I hope the time you spend here      - 
      </p>
    {:else if $scene === 5}
    <p in:typewriter|local={{speed: 80}} on:introend={() => scene.set(6)}>
      will convince you that I am the right candidate for the position as a Frontend Developer on LEGO.com       -
    </p>
    {:else if $scene === 6}
    <p in:typewriter|local={{speed: 100}} on:introend={() => scene.set(7)}>
      The little Lego fellow here, will take you on a journey back in time.              -
    </p>
    {/if}
    {#if $scene === 5 || $scene ===6} 
    <LegoFigure></LegoFigure>
    {/if}
  </div>
</div>
{/if}

<style>
  :global(:root) {
    --glass-color: #052605;
    --text-color: #36e836;
    --line-color: #256825;
    --monitor-width: 600px;
  }
  
  .monitor {
    width: var(--monitor-width);
    height: var(--monitor-width);
    max-width: 100vw;
    max-height: 100vh;
    padding: 2em;
    box-sizing: border-box;
    position: relative;
    transition: transform 0.2s ease-in-out;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }

  @media only screen and (min-width: 410px) {
    .monitor {
      padding: 3em;
    }
  }
  .monitor:after,
  .monitor__glass:before {
    background-repeat: no-repeat;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .monitor:after {
    background-image: url('./assets/lego-monitor.png');
    background-size: 100% 100%;
  }

  .monitor__glass:before {
    background-image: url('./assets/static-noise.png');
    background-size: 2000px 100%;
  }

  .monitor__glass:after {
    content: "";
    height: 2px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--line-color);
    animation: moveLine 4s cubic-bezier(0.24, 0.05, 0.61, -0.02) infinite;
  }

  .monitor__glass {
    height: 100%;
    background-color: var(--glass-color);
    position: relative;
    color: var(--text-color);
    font-size: 18px;
    font-family: monospace;
    text-shadow: 0 0 2px;
    overflow: hidden;
    box-sizing: inherit;
    padding: 1.6rem;
  }

  @keyframes moveLine {
    49% {
      opacity: 0.25;
      transform: translateY(calc(var(--monitor-width) / 2));
    }
    54% {
      transform: translateY(calc(var(--monitor-width) / 2.5)) scaleY(5);
    }
    55% {
      transform: translateY(calc(var(--monitor-width) / 2.5)) scaleY(1);
    }

    100% {
      transform: translateY(var(--monitor-width));
    }
  }

</style>


