<script lang="ts">
	export let home: boolean = false;
</script>

<footer>
	{#if !home}
		<!-- go up a level -->
		<button id="back" on:click={() => history.back()}>←back</button>
	{:else}
		<a href="/about">about→</a>
	{/if}
</footer>

<style>
	a {
		font-size: 1.5rem;
		font-weight: 700;
	}

	#back {
		color: white;
		background-color: black;
		border: none;
		font-family: 'Lekton', monospace;
		font-size: 1.5rem;
		font-weight: 700;
		cursor: pointer;
	}
</style>
