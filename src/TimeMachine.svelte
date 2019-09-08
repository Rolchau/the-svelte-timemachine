<script>
  import { onMount } from 'svelte';
  import Tardis from './Tardis.svelte';
  import LegoFigure from './LegoFigure.svelte';

  let startTardis = false;
  let figureOffsetTop = 0;

  onMount(() => {
    console.log(legoDom);
  });

  function timeMachineIsReady() {
    
  }

  function createTimeMachine() {
    startTardis = true;
  }

</script>

<div class="scene-wrapper">
  <h1>Offset: {figureOffsetTop}</h1>
  <div class="scene-figure-container">
    <div class="speech-bobble">Lorem ipsum dolor sit amet.</div>
    <LegoFigure inside={false} on:done-talking={createTimeMachine}></LegoFigure>
  </div>
  <div class="scene-tardis-container">
    <Tardis start={startTardis} on:done-drawing={timeMachineIsReady}></Tardis>
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
</style>