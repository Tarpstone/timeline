<script lang="ts">
	export let year: string = '';
	export let event: string = '';
	export let image: string = '';
</script>

<header>
	<h1>
		<a href="/">timeline</a>{#if year}/<a href="/{year}">{year}</a>{/if}{#if event}/<a
				href="/{year}/{event}">{event}</a
			>{/if}{#if image}/<a href="/{year}/{event}/{image}">{image}</a>{/if}
	</h1>
</header>

<style>
	h1 {
		display: flex;
	}
</style>
