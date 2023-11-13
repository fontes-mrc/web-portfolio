<script>
	// @ts-nocheck
	export let lang = 'en';

	let content = {
		en: 'Designed with ❤️ by me, built with SvelteKit and hosted on Vercel.',
		br: 'Design criado com ❤️ por mim mesmo, construído com SvelteKit e hospedado na Vercel.'
	};
</script>

<div class="footer">
	<p>{content[lang]}</p>
</div>

<style lang="scss">
	.footer {
		color: #d7dadf9a;
		background-color: rgba(0, 0, 0, 0.35);
		backdrop-filter: blur(3px);
		font-size: 0.9rem;
		height: 4rem;
		padding: 0 2rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		user-select: none;
	}
</style>
