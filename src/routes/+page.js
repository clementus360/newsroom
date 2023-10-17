const url="http://localhost:1337/api/articles?populate=*"

export async function load({fetch, params}) {
    const res = await fetch(url)

    const articles = await res.json()

    return articles
}