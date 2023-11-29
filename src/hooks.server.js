/** @type {import('@sveltejs/kit').Handle} */
export function handle({ event, resolve }) {
    function get_attributes(event) {
        const lang = event.route.id == "/br" ? "pt-br" : "en"
        if (lang == "pt-br") {
            return {
                lang: "pt-br",
                description:
                    "Maurício Fontes, engenheiro de dados e desenvolvedor experiente, traz sua paixão por inovação e conhecimento para criar soluções inovadoras."
            }
        } else {
            return {
                lang: "en",
                description:
                    "Maurício Fontes, an experienced data engineer and developer, thrives on continuous learning, bringing expertise in data engineering and development to drive innovative solutions."
            }
        }
    }

    const attr = get_attributes(event)

    return resolve(event, {
        transformPageChunk: ({ html }) =>
            html.replace("%lang%", attr.lang).replace("%description%", attr.description)
    })
}
