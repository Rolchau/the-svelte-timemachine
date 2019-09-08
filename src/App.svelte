<svelte:head>
	<title>Hi Lego!</title>
</svelte:head>

<script>
	import { scene, count, doubled } from './scene-store.js';
	import { onMount } from 'svelte';
	import MrComputer from './MrComputer.svelte';
	import Cloud from './Cloud.svelte';
	import Brick from './Brick.svelte';
	import Monitor from './Monitor.svelte';
	import TimeMachine from './TimeMachine.svelte';
	
	let visible = false;
	
	const unsubscribe = scene.subscribe(value => {
		console.log(value);
	});

	onMount(() => {
		visible = true;
		scene.set(7);
	}); 

</script>

{#if false}
<div class="lego-constrainer">
	<h1>Hi!</h1>
	<div class="scene-wrapper">
		<!-- TODO - Should maybe add scene components here -->
		<MrComputer {visible}></MrComputer>
		<div class="cloud-brick-container">
			<Cloud {visible}></Cloud>
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

<label>
	<input type="text" bind:value={$scene} />
	visible
</label>
<p>Which scene: { $scene } </p>

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
	}
	
	.lego-constrainer {
		max-width: var(--page-max-width);
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.scene-wrapper {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: flex-start;
	}

	.cloud-brick-container {
		display: grid;
	}

	h1 {
		font-size: 3rem;
		text-align: center;
	}
</style>



