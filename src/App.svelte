<svelte:head>
	<title>Hi Lego!</title>
</svelte:head>

<script>
	import { scene } from './scene-store.js';
	import { onMount } from 'svelte';
	import MrComputer from './MrComputer.svelte';
	import Cloud from './Cloud.svelte';
	import Brick from './Brick.svelte';
	import Monitor from './Monitor.svelte';
	import TimeMachine from './TimeMachine.svelte';
	import Past from './Past.svelte';
	import Present from './Present.svelte'; 
	
	onMount(() => {
		scene.set(0);
	}); 

</script>

{#if $scene >= 0 && $scene < 3}
<div class="lego-constrainer">
	<div class="scene-wrapper">
		<!-- TODO - Should maybe add scene components here -->
		<MrComputer></MrComputer>
		<div class="cloud-brick-container">
			<Cloud></Cloud>
			<Brick></Brick>
		</div>
	</div>
</div>
{/if}
{#if $scene >= 3 && $scene < 7}
	<Monitor/>
{/if}
{#if $scene === 7}
	<TimeMachine/>
{/if}
{#if $scene === 8}
	<Past></Past>
{/if}
{#if $scene === 9}
	<Present></Present>
{/if}

<style>
	:root {
		--body-bg: #3b839c;
		--body-fg: #fff;
		--page-max-width: 720px;
	}
	:global(body) {
		background-color: var(--body-bg);
		color: var(--body-fg);
		transition: color 100ms ease-in-out;
		display: flex;
		flex-direction: column;
		align-content: center;
    justify-content: center;
	}
	
	.lego-constrainer {
		flex: 1 0 auto;
		width: 100%;
		max-width: var(--page-max-width);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		align-self: center;
	}

	.scene-wrapper {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: center;
	}

	.cloud-brick-container {
		display: grid;
	}
</style>



