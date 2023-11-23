<script>
	// @ts-nocheck
	import { onMount } from 'svelte';

	export let corpus;
	let { hero } = corpus;

	onMount(() => {
		window.addEventListener('scroll', function () {
			const scrollIcon = document.querySelector('.scroll-icon');
			if (window.scrollY > 50) {
				scrollIcon.style.display = 'none';
			} else {
				scrollIcon.style.display = 'block';
			}
		});
	});
</script>

<!-- <div class="message">
	<p>{hero.message}</p>
</div> -->
<div class="hero">
	<h2>{hero.greetings}</h2>
	<h1>Maurício Fontes</h1>
	<div class="desc-wrapper">
		<div id="desc-web">{hero.description.web}</div>
		<div id="desc-mobile">{hero.description.mobile}</div>
		<div class="desc-contents">
			<ul>
				{#each hero.description.values as value}
					<li>{value}</li>
				{/each}
				<li>{hero.description.values[0]}</li>
			</ul>
		</div>
	</div>
	<div class="contacts-bar">
		<div class="contact">
			<a href="https://github.com/fontes-mrc" target="_blank">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					fill="currentColor"
					class="h-6 w-6"
					aria-hidden="true"
					><path
						d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
					/></svg
				>
			</a>
		</div>
		<div class="contact">
			<a href="https://www.linkedin.com/in/mrcfontes" target="_blank">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="h-6 w-6"
					aria-hidden="true"
					><path
						d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
					/></svg
				>
			</a>
		</div>
		<div class="contact">
			<a href="mailto:fontes.mrc@gmail.com" target="_blank">
				<svg height="1792" viewBox="0 0 1792 1792" width="1792" xmlns="http://www.w3.org/2000/svg"
					><path
						d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"
					/></svg
				>
			</a>
		</div>
	</div>
	<div class="scroll-icon" />
</div>

<style>
	.hero {
		text-align: left;
		color: var(--light-gray);
		height: 100vh;
		max-width: 40rem;
		margin: 0 auto;
		padding: 0 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		user-select: none;
	}

	.hero h1 {
		font-size: 4rem;
		font-weight: 700;
	}

	.hero h2 {
		font-size: 1.2rem;
		font-weight: 500;
	}

	.desc-wrapper {
		overflow: hidden;
		height: 1.8rem;
		font-size: 1.3rem;
		font-weight: 500;
		color: var(--main-color);
		display: flex;
		align-items: left;
	}

	#desc-web {
		display: inline-block;
	}

	#desc-mobile {
		display: none;
	}

	.desc-contents {
		margin-left: 0.3rem;
	}

	.desc-contents ul {
		list-style: none;
		padding: 0;
		margin: 0;
		animation: scrollUp 6s infinite;
		font-weight: 800;
	}

	@media (max-width: 768px) {
		.hero {
			max-width: 100%;
			width: 100%;
		}

		#desc-web {
			display: none;
		}

		#desc-mobile {
			display: inline-block;
		}

		.hero h1 {
			font-size: 3.4rem;
		}

		.desc-wrapper {
			font-size: 1.1rem;
			height: 1.2rem;
		}
	}

	@keyframes scrollUp {
		15%,
		25% {
			transform: translateY(-20%);
		}
		40%,
		50% {
			transform: translateY(-40%);
		}
		65%,
		75% {
			transform: translateY(-60%);
		}
		90%,
		100% {
			transform: translateY(-80%);
		}
	}

	.contacts-bar {
		display: flex;
		justify-content: center;
		width: 6.5rem;
		margin: 1rem 0;
	}

	.contacts-bar:hover .contact:not(:hover) {
		filter: blur(0.8px);
		opacity: 0.9;
	}

	.contact {
		margin: 0 0.4rem;
	}

	.contact svg {
		fill: var(--light-gray);
		width: 1.6rem;
		height: 1.6rem;
		transition: all 0.2s;
	}

	.contact svg:hover {
		fill: var(--white);
		cursor: pointer;
		transform: translateY(-0.3rem);
	}

	.message {
		position: absolute;
		background-color: var(--back-color-3);
		top: 4rem;
		width: 100%;
		font-size: 1.5rem;
		color: var(--main-color);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1rem;
		text-align: center;
		padding: 0.5rem 0;
	}

	.scroll-icon {
		position: absolute;
		bottom: 4rem;
		left: 50%;
		width: 1.4rem;
		height: 1.4rem;
		border-left: 1px solid var(--light-gray);
		border-bottom: 1px solid var(--light-gray);
		animation: scrollIcon 1s infinite;
	}

	@keyframes scrollIcon {
		0% {
			transform: translateY(0rem) translateX(-50%) rotate(-45deg);
			opacity: 0.7;
			filter: blur(0.7px);
		}
		40% {
			transform: translateY(0.5rem) translateX(-50%) rotate(-45deg);
			opacity: 1;
			filter: blur(0px);
		}
		100% {
			transform: translateY(0rem) translateX(-50%) rotate(-45deg);
			opacity: 0.7;
			filter: blur(0.7px);
		}
	}
</style>
