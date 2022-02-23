<script context="module">
	import "../lib/_index.scss"
	import { Button, IconButton, setNotice } from '@silintl/ui-components'
	
	export const prerender = true;
</script>

<script>
	import Counter from '$lib/Counter.svelte';
	import Snackbar from '../../../../ui-components/components/mdc/Snackbar/Snackbar.svelte';
	import Tooltip from "@silintl/ui-components/components/mdc/Tooltip/Tooltip.svelte";
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<Counter />

	<Button raised on:click={() => setNotice('Hi mom!')}>Hi Mom</Button>

	<Tooltip.Wrapper ariaDescribedBy="icon-button">
		<IconButton url="/about" icon="house" />
	</Tooltip.Wrapper>

	<Tooltip tooltipID="icon-button" positionX="start">Go to About</Tooltip>
	
	<Snackbar/>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
