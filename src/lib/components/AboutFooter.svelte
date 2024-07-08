<script lang="ts">
	export let home: boolean = false;
</script>

<footer>
	{#if !home}
		<!-- go up a level -->
		<a href=".">←back</a>
	{:else}
		<a href="/about">about→</a>
	{/if}
</footer>

<style>
	a {
		font-size: 1.5rem;
		font-weight: 700;
	}
</style>
