/** @type {import('@sveltejs/kit').Handle} */
export function handle({ event, resolve }) {
	const get_lang = (event) => (event.route.id == '/br' ? 'pt-br' : 'en');
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', get_lang(event))
	});
}
