export async function get({params}) {
    const id = params.id;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const pokeman = await response.json();
    return {
        status: 200,
        body: pokeman
    };
}