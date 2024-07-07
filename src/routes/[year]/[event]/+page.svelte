<script>
	import baseball from '$lib/albums/2024/dreamhack-dallas/baseball.webp';
	export let data;
</script>

<main>
	<section>
		<header>
			<h1>2024 // dreamhack dallas</h1>
		</header>
		<div class="album-grid">
			{#each data.images as { href, enhancedSrc, altText }}
				<a {href}><enhanced:img class="album-grid-img" src={enhancedSrc} alt={altText} /></a>
			{/each}
		</div>
	</section>
</main>

<style>
	main {
		max-width: 800px;
	}

	.album-grid-img {
		display: block;
		object-fit: cover;
		width: 400px;
		height: 400px;
	}

	.album-grid {
		display: flex;
		flex-wrap: wrap;
	}

	@media (max-width: 800px) {
		.album-grid-img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		a {
			width: 50vw;
			height: 50vw;
		}
	}
</style>
