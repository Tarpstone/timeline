<script lang="ts">
	export let year: string = '';
	export let event: string = '';
	export let about: boolean = false;
</script>

<header>
	{#if about}
		<h1>
			<a href="/">timeline</a>/about
		</h1>
	{:else}
		<h1>
			<a href="/">timeline</a>{#if year}/<a href="/{year}">{year}</a>{/if}{#if event}/<a
					href="/{year}/{event}">{event}</a
				>{/if}
		</h1>
	{/if}
</header>

<style>
	h1 {
		display: flex;
		margin: 20px 0 0 10px;
	}

	@media (max-width: 800px) {
		h1 {
			font-size: 1.5rem;
		}
	}
</style>
