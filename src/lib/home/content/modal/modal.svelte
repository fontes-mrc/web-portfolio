<script>
	// @ts-nocheck
	export let modalProps;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="modal-fade"
	class:hide={!modalProps.isActive}
	on:click|self={() => (modalProps.isActive = false)}
>
	<div class="modal-dialog">
		<div class="modal-header">
			<button on:click={() => (modalProps.isActive = false)}>
				<svg
					viewBox="0 0 24 24"
					width="24"
					height="24"
					stroke="currentColor"
					stroke-width="1"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M18 6L6 18" />
					<path d="M6 6l12 12" />
				</svg>
			</button>
		</div>
		<div class="modal-content">
			<div class="modal-metadata">
				<div class="company-logo">
					<img src={modalProps.companyLogo} alt={modalProps.company} />
				</div>
				{#if modalProps.companySite}
					<div class="company-site">
						<a href={modalProps.companySite} target="_blank">
							{modalProps.company}
							<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"
								><g
									fill="none"
									fill-rule="evenodd"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									transform="translate(6 6)"><path d="m8.5 7.5v-7h-7" /><path d="m8.5.5-8 8" /></g
								></svg
							>
						</a>
					</div>
				{/if}
				<div class="period">
					<span>{modalProps.period}</span>
				</div>
				<div class="toolkit">
					{#each modalProps.tools as tool}
						<span>{tool}</span>
					{/each}
				</div>
			</div>
			<div class="modal-body">
				<div class="title">
					<h1>{modalProps.title}</h1>
				</div>
				<div class="role">
					<h2>{modalProps.role}</h2>
				</div>
				<div class="content">
					{#if modalProps.content}
						{#each modalProps.content as item}
							{#if item.type === 'text'}
								<p>{item.text}</p>
							{:else if item.type === 'title'}
								<h1>{item.text}</h1>
							{:else if item.type === 'list'}
								<ul>
									{#each item.items as listItem}
										<li>{listItem}</li>
									{/each}
								</ul>
							{/if}
						{/each}
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.modal-fade {
		position: fixed;
		overflow: hidden;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #00000050;
		z-index: 1;
		backdrop-filter: blur(0.2rem);
		transition: all 0.2s ease-in-out;
	}

	:global(.modal-fade.hide) {
		opacity: 0;
		pointer-events: none;
		transform: scale(1.1);
	}

	.modal-dialog {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 90%;
		max-width: 1200px;
		height: 90%;
		background-color: var(--back-color);
		border: 1px solid var(--back-color-2);
		border-radius: 0.2rem;
		box-shadow: 0 0 0.2rem var(--alt-color);
		z-index: 1;
	}

	.modal-header {
		width: 100%;
		height: 3rem;
		display: flex;
		justify-content: flex-end;
	}

	.modal-header button {
		width: 3rem;
		height: 3rem;
		background-color: transparent;
		border: none;
		border-radius: 0.2rem;
		cursor: pointer;
	}

	.modal-header button svg {
		width: 2rem;
		height: 2rem;
		stroke: var(--back-color-4);
		transition: all 0.2s ease-in-out;
	}

	.modal-header button:hover svg {
		stroke: var(--main-color);
	}

	.modal-content {
		width: 100%;
		height: calc(100% - 4rem);
		display: flex;
		flex-direction: row;
	}

	.modal-metadata {
		height: 100%;
		width: 17rem;
		padding: 0 2rem;
	}

	.modal-metadata .company-logo {
		width: 100%;
		height: 8rem;
		display: flex;
		justify-content: center;
		align-items: center;
		user-select: none;
	}

	.modal-metadata .company-logo img {
		width: 8rem;
		height: 8rem;
		opacity: 0.7;
	}

	.modal-metadata .company-site {
		width: 100%;
		height: 1.5rem;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.modal-metadata .company-site a {
		color: var(--light-gray);
		text-decoration: none;
		font-size: 1rem;
		font-weight: 300;
		text-align: left;
		transition: all 0.1s ease-in-out;
		display: flex;
	}

	.modal-metadata .company-site a svg {
		transition: all 0.1s ease-in-out;
	}

	.modal-metadata .company-site a:hover svg {
		transform: translate(0.15rem, -0.15rem);
	}

	.modal-metadata .company-site a:hover {
		color: var(--alt-color);
	}

	.modal-metadata .period {
		width: 100%;
		height: 1.5rem;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.modal-metadata .period span {
		color: var(--light-gray);
		opacity: 0.7;
		font-size: 0.9rem;
		font-weight: 200;
		text-align: right;
	}

	.modal-metadata .toolkit {
		width: 12rem;
		max-height: 15rem;
		overflow: hidden;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		flex-wrap: wrap;
		bottom: 0;
		margin-bottom: 2rem;
		position: absolute;
	}

	.modal-metadata .toolkit span {
		color: var(--light-gray);
		font-size: 0.7rem;
		font-weight: 300;
		text-align: left;
		margin-right: 0.5rem;
		padding: 0.3rem;
		margin: 0.2rem;
		border-radius: 0.2rem;
		background-color: var(--back-color-3);
	}

	.modal-body {
		padding-left: 2rem;
		flex: 1;
		height: 100%;
		border-left: 1px solid var(--back-color-4);
		display: flex;
		flex-direction: column;
	}

	.modal-body .title {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.modal-body .title h1 {
		color: var(--main-color);
		font-size: 2rem;
		font-weight: 500;
		text-align: left;
	}

	.modal-body .role {
		width: 100%;
		min-height: 2.2rem;
		margin-bottom: 0.5rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.modal-body .role h2 {
		color: var(--light-gray);
		font-size: 0.9rem;
		font-weight: 600;
		text-align: left;
		text-transform: uppercase;
	}

	.content {
		overflow-y: scroll;
		width: 100%;
		flex: 1;
		color: var(--light-gray);
		padding-right: 2rem;
	}

	@media (max-width: 768px) {
		.modal-dialog {
			width: 98%;
			height: 99%;
		}

		.modal-content {
			flex-direction: column;
		}

		.modal-metadata {
			width: calc(100% - 2rem);
			margin: 0 1rem;
			height: 9rem;
			padding: 0;
			border-bottom: 1px solid var(--back-color-4);
		}

		.modal-metadata .company-logo {
			height: 5rem;
			justify-content: start;
		}

		.modal-metadata .company-logo img {
			height: 100%;
			max-width: 100%;
		}

		.modal-metadata .company-site {
			justify-content: flex-start;
		}

		.modal-metadata .period {
			justify-content: flex-start;
		}

		.modal-metadata .toolkit {
			display: none;
		}

		.modal-body {
			padding: 1rem;
			border-left: 0;
			max-height: calc(100% - 9rem);
		}

		.modal-body .title h1 {
			font-size: 1.6rem;
		}

		.modal-body .role h2 {
			font-size: 1rem;
		}

		.content {
			padding-right: 0.5rem;
		}
	}

	.content h1 {
		color: var(--main-color);
		font-size: 1.2rem;
		font-weight: 500;
		margin-top: 2rem;
		margin-bottom: 1rem;
	}

	.content p,
	.content ul {
		font-size: 1rem;
		font-weight: 200;
		margin: 1rem 0;
		line-height: 1.5rem;
		text-align: justify;
	}

	.content ul {
		margin-left: 2rem;
	}

	.content ul li {
		margin: 0.5rem 0;
	}

	/* .content img {
		width: 100%;
		height: auto;
		margin: 1rem 0;
		border-radius: 0.3rem;
		border: 1px solid var(--alt-color);
		box-shadow: inset 0 0 0.2rem var(--alt-color), 0 0 0.2rem var(--alt-color);
	} */

	.content p,
	.content ul {
		font-size: 0.9rem;
		line-height: 1.3rem;
		text-align: left;
	}

</style>
