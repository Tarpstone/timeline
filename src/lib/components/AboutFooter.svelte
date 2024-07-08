<script lang="ts">
	export let about: boolean = false;
</script>
<footer>
    {#if about}
    <a href="/">←back</a>
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