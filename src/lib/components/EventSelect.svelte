<script lang="ts">
	import { getEventKeyImage } from '../db';
	export let year: string = '';
	export let name: string = '';
	export let slug: string = '';
	const image = getEventKeyImage(year, slug);
</script>

<li><a class="year-link" href="{year}/{slug}"
	>
		<span class="event-name">{name}</span><enhanced:img
			class="event-key-img"
			src={image.enhancedSrc}
			alt={image.altText}
		/>
	</a
></li>

<style>
	.year-link {
		display: grid;
		grid-template-columns: 1fr 3fr;
		grid-template-rows: 400px;
		color: #000000;
		background-color: #ffffff;
		padding: 10px 0;
		margin-bottom: 20px;
		justify-items: left;
		align-items: center;
		overflow: hidden;
	}
	.year-link:hover {
		background-color: #ffcc99;
	}

	.event-name {
		align-self: center;
		justify-self: center;
	}

	.event-key-img {
		display: block;
		object-fit: cover;
	}
</style>
