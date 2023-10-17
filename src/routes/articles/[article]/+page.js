const url="http://localhost:1337/api/articles/"

export async function load({fetch, params}) {
    const res = await fetch(url+params.article+'/?populate=*')

    const article = await res.json()
    
    return article
}