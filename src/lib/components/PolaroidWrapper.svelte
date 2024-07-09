<script lang="ts">
	export let href: string;
</script>

{#if href}
    <a class="polaroid-wrapper" href={href}><slot /></a>
{:else}
    <div class="polaroid-container"><div class="polaroid-wrapper-hero"><slot /></div></div>
{/if}

<style>
    .polaroid-wrapper {
        display: grid;
        grid-template-rows: 1fr 7fr;
        height: 400px;
        padding: 10px;
        background-color: #ffffff;
    }
    @media (max-width: 800px) {
		.polaroid-wrapper {
			grid-template-rows: 1fr 7fr;
			height: 50vw;
			width: 100%;
		}
    }

    .polaroid-wrapper-hero {
        display: grid;
        grid-template-rows: 1fr auto;
        width: 800px;
        margin: 10px;
        padding: 10px;
        background-color: #ffffff;
    }
    @media (max-width: 800px) {
        .polaroid-container {
            display: flex;
            width: 100vw;
        }
    }
</style>