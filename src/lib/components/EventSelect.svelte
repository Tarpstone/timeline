<script lang="ts">
	import { getEventKeyImage } from '../db';
	export let year: string = '';
	export let name: string = '';
	export let slug: string = '';
	const image = getEventKeyImage(year, slug);
</script>

<li><a class="year-link" href="{year}/{slug}"
	>
		<div class="event-name-div">
		<span class="event-name">{name}</span></div><enhanced:img
			class="event-key-img"
			src={image.enhancedSrc}
			alt={image.altText}
		/>

	</a
></li>

<style>
	.year-link {
		display: grid;
		grid-template-columns: 200px 1fr;
		grid-template-rows: 400px;
		color: #000000;
		background-color: #ffffff;
		padding: 10px 0;
		margin-bottom: 20px;
		justify-items: center;
		align-items: center;
		overflow: hidden;
	}

	.year-link:hover {
		background-color: #ffcc99;
	}

	.event-name-div {
		display: block;
	}

	.event-name {
		display: block;
		text-align: center;
		align-self: center;
		justify-self: center;
	}

	.event-key-img {
		width: 600px;
		display: block;
		object-fit: cover;
		height: 30vh;
	}

	@media (max-width: 800px) {
		.year-link {
			grid-template-rows: 5vh 30vh;
			grid-template-columns: 100vw;
			padding: 0px;
		}

		.event-key-img {
			width: 100vw;
		}

		.event-name {
			margin-left: 20px;
		}
	}
</style>
