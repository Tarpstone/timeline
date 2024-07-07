<main>
	<section>
		<header>
			<h1>2024 // dreamhack dallas</h1>
		</header>
		<div class="album-grid">
			<a href="/2024/dreamhack-dallas/baseball"
				><enhanced:img
					class="album-grid-img"
					src="$lib/images/albums/2024-dreamhack-dallas/baseball.webp"
					sizes="max(400px, 50vw)"
					alt="From left to right sitting in the stands at Truist Park in Atlanta, GA: Brandon, Mike Tarpey, Bryant."
				/></a
			>
			<a href="/2024/dreamhack-dallas/ddr"
				><enhanced:img
					class="album-grid-img"
					src="$lib/images/albums/2024-dreamhack-dallas/ddr.webp"
					sizes="max(400px, 50vw)"
					alt="Mike Tarpey holding a rainbow-colored Dance Dance Revolution arrow pillow made by Maiden And The Machine."
				/></a
			>
			<a href="/2024/dreamhack-dallas/banks"
				><enhanced:img
					class="album-grid-img"
					src="$lib/images/albums/2024-dreamhack-dallas/banks.webp"
					sizes="max(400px, 50vw)"
					alt="Pictured on the left is James Banks, the premier player interviewer and stage hype-man in Counter-Strike esports. Pictured on the right is Mike Tarpey, owner of this website (tarpey.dev)."
				/></a
			>
			<a href="/2024/dreamhack-dallas/kaelaris"
				><enhanced:img
					class="album-grid-img"
					src="$lib/images/albums/2024-dreamhack-dallas/kaelaris.webp"
					sizes="max(400px, 50vw)"
					alt="Mike Tarpey takes a selfie with James 'Kaelaris' Carrol, long-time StarCraft II commentator and host."
				/></a
			>
			<a href="/2024/dreamhack-dallas/gstew"
				><enhanced:img
					class="album-grid-img"
					src="$lib/images/albums/2024-dreamhack-dallas/gstew.webp"
					sizes="max(400px, 50vw)"
					alt="The winning moment from IEM Dallas 2024. Members of G2 Esports stand behind their trophy on-stage after defeating Vitality 2-1 in the best-of-3 series. Their faces are displayed prominently on the big screen above the stage, while smaller yellow pyrotechnics fire off on each side."
				/></a
			>
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
