<script>
    // @ts-nocheck
    export let corpus
    let { about } = corpus
</script>

<div class="section">
    <h3>{about.title}</h3>
    <div class="img-with-text-block">
        <div class="text-block">
            {#each about.paragraphs as paragraph}
                <p>{paragraph}</p>
            {/each}
        </div>
        <div class="image-bg right">
            <div class="image" id="cat-gif" />
        </div>
    </div>
</div>

<style>
    h3 {
        margin-top: 0;
    }

    .img-with-text-block {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 3rem;
    }

    .image-bg {
        min-width: 10%;
        height: auto;
        margin-bottom: 2rem;
        border-radius: 0.5rem;
        background-color: var(--main-color);
        border: 1px solid var(--alt-color);
        transition: all 0.2s ease-in-out;
        box-shadow: inset 0 0 0.3rem var(--alt-color), 0 0 0.3rem var(--alt-color);
    }

    .image-bg:hover {
        border: 1px solid var(--main-color);
        box-shadow: inset 0 0 0.6rem var(--main-color), 0 0 1rem var(--main-color);
    }

    @media (max-width: 1100px) {
        .image-bg {
            min-width: 15%;
        }
    }

    @media (max-width: 900px) {
        .image-bg {
            min-width: 25%;
        }
    }

    @media (max-width: 768px) {
        .image-bg {
            display: none;
        }
    }

    .image-bg.right {
        margin-left: 2rem;
    }

    .image {
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
        filter: grayscale(100%) opacity(0.75);
    }

    #cat-gif {
        object-fit: cover;
        background-image: url("/images/cat.gif");
        background-size: cover;
        background-position: center;
        transition: background-image 0.1s ease-in-out;
    }

    #cat-gif:hover {
        background-image: url("/images/cat-hover.gif");
    }

    .text-block {
        text-align: justify;
    }

    @media (max-width: 768px) {
        .text-block {
            text-align: left;
        }
    }

    .text-block p {
        line-height: 1.5rem;
        font-size: 1rem;
        font-weight: 300;
        margin-bottom: 0.5rem;
    }
</style>
