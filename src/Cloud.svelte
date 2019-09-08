<script>
  import { scene } from './scene-store.js';
  import { fly } from 'svelte/transition';
</script>

{#if $scene < 1}
<div class="cloud" out:fly="{{ x: 200, duration: 1000, delay: 1400}}" on:outroend={() => {scene.set(2)}}>
  <div class="cloud__child"></div>
  <div class="cloud__child"></div>
  <div class="cloud__child"></div>
</div>
{/if}

<style>
	.cloud {
		position: relative;
		width: 200px;
		height: 200px;
		grid-column: 1;
		grid-row: 1;		
	}

	.cloud__child {
		background-color: white;
		border-radius: 50%;
		width: 200px;
		height: 70px;
		box-shadow: inset 0 -5px 0 #cecdcd;
		position: absolute;
		top: 0;
		left: 0;
		animation: cloudMovement 2s linear infinite; 
	}
	.cloud__child:nth-child(2) {
		top: 25%;
		left: 25%;
		animation-direction: reverse;
		animation-delay: 900ms;
	}
	.cloud__child:nth-child(3) {
		top: 10%;
		left: 75%;
		width: 130px;
		animation-delay: 600ms;
	}

	@keyframes cloudMovement {
		50% {
			transform: translateY(-6%);
		}
		100% {
			transform: translateY(0%);
		}
	}
</style>