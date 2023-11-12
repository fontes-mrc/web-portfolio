<script>
	// @ts-nocheck
	export let corpus;
	let { content } = corpus;

	import About from './about/about.svelte';
	import Interests from './interests/interests.svelte';
</script>

<div class="content">
	<About corpus={content} />
	<Interests corpus={content} />
</div>

<style>
	.content {
		margin: 2rem auto;
		color: var(--light-gray);
		padding: 3rem;
		width: 90%;
		max-width: 1200px;
		backdrop-filter: blur(5px);
		background-color: rgba(0, 0, 0, 0.05);
		border-radius: 0.5rem;
	}
</style>
