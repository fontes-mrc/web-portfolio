<script>
    // @ts-nocheck

    export let modalProps = {}
    export let corpus
    let { projects } = corpus

    function openModal(project) {
        modalProps = {
            isActive: true,
            companyLogo: project.companyLogo,
            company: project.company,
            companySite: project.companySite,
            period: project.period,
            tools: project.tools,
            title: project.title,
            role: project.role,
            content: project.content
        }
    }
</script>

<div class="section">
    <h3>{projects.title}</h3>
    <div class="cards-wrapper">
        {#each projects.items as project}
            <button class="card" on:click={() => openModal(project)}>
                <div class="company-logo">
                    <img src={project.companyLogo} alt={project.company} />
                </div>
                <div class="metadata">
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <div class="toolkit">
                        {#each project.tools as tool}
                            <div class="tool">{tool}</div>
                        {/each}
                    </div>
                </div>
            </button>
        {/each}
    </div>
</div>

<style>
    .cards-wrapper {
        display: flex;
        flex-wrap: wrap;
        margin: 0 1rem;
    }

    .cards-wrapper:hover .card:not(:hover) {
        filter: blur(1px);
        opacity: 0.8;
    }

    .card {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        min-height: 10rem;
        margin: 0.5rem 0;
        border-radius: 0.5rem;
        background-color: transparent;
        border: 1px solid var(--back-color-3);
        transition: all 0.2s ease-in-out;
    }

    @media (max-width: 600px) {
        .card {
            flex-direction: column;
        }

        .company-logo {
            padding-top: 2rem;
            width: 50% !important;
            height: 5rem !important;
            margin: 0 25% !important;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .card:hover {
        background-color: #1e2b4955;
        border: 1px solid var(--alt-color);
        box-shadow: inset 0 0 0.2rem var(--alt-color), 0 0 0.2rem var(--alt-color);
        transform: translateX(0.2rem);
    }

    .company-logo {
        width: 10rem;
        height: 100%;
        margin: 0 1rem;
        filter: brightness(0.8);
        opacity: 0.8;
    }

    .company-logo img {
        width: 95%;
        height: 95%;
        object-fit: contain;
    }

    .metadata {
        flex: 1;
        height: 100%;
        padding: 1rem;
        display: flex;
        flex-direction: column;
    }

    .metadata h1 {
        font-size: 1.4rem;
        font-weight: 700;
        width: 100%;
        text-align: left;
        color: var(--main-color);
        margin-bottom: 0.5rem;
    }

    .metadata p {
        font-size: 0.8rem;
        font-weight: 400;
        width: 100%;
        text-align: left;
        color: var(--light-gray);
        margin-bottom: 1rem;
    }

    .toolkit {
        display: flex;
        flex-wrap: wrap;
        overflow: scroll;
    }

    .toolkit::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    .tool {
        font-size: 0.8rem;
        font-weight: 400;
        color: var(--light-gray);
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
        padding: 0.2rem 0.5rem;
        border-radius: 0.2rem;
        background-color: var(--back-color-3);
    }
</style>
