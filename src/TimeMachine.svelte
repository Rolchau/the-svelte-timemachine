<script>
  import { scene } from './scene-store.js';
  import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { scale } from 'svelte/transition';
  import Tardis from './Tardis.svelte';
  import LegoFigure from './LegoFigure.svelte';

  let startTardis = false;
  let tardisReady = false;

  function timeMachineIsReady() {
    tardisReady = true;
  }

  function createTimeMachine() {
    startTardis = true;
  }

  const rotation = tweened(0, {
    duration: 300
  });

  const scaling = tweened(1, {
    duration: 300
  });

  const opacity = tweened(1, {
    duration: 500
  });
  
  async function onClick() {
    if (tardisReady) {
      rotation.set(970);
      scaling.set(12);
      await opacity.set(0);
      scene.set(8);
    }
  }

</script>

<div class="scene-wrapper" style="opacity: {$opacity}" in:scale={{duration: 200, opacity: 0.5}}>
  <div class="scene-figure-container">
    <div class="speech-bobble">Hi there! I created a time traveling machine made entirely out of CSS shadows. Try it!</div>
    <LegoFigure inside={false} on:done-talking={createTimeMachine}></LegoFigure>
  </div>
  <div class="scene-tardis-container" style="transform: rotate({$rotation}deg) scale({$scaling})">
    <Tardis start={startTardis} on:done-drawing={timeMachineIsReady} on:click={onClick}></Tardis>
  </div>
  <div class="scene__ground"></div>
</div>

<style>
  .scene-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: var(--glass-color);
    overflow: hidden;
  }

  .scene-figure-container,
  .scene-tardis-container {
    position: absolute;
    bottom: 20vh;
  }

  .scene-tardis-container {
    left: 200px;
  }

  .scene__ground {
    position: absolute;
    bottom: 20vh;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: var(--text-color);
    box-shadow: 0 0 6px var(--text-color);
  }

  .speech-bobble {
    width: 300px;
    max-width: 100vw;  
    padding: 1rem;
    border-radius: 30px;
    position: absolute;
    left: 70px;
    bottom: 360px;
    background-color: white;
    color: #333;
    transform-origin: 30% 100%;
    opacity: 0;
    transform: scale(0);
    animation: talk 0.2s cubic-bezier(0.01, 1.24, 0.24, 1.21) 0.5s forwards;
  }
  .speech-bobble:after {
    content: "";
    border: 20px solid transparent;
    border-left-color: white;
    position: absolute;
    left: 120px;
    bottom: -20px;
  }

  @keyframes talk {
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>