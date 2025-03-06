const domain = "http://localhost:5050"
const deployed_domain = "blog-backend-production-0ee0.up.railway.app"

export const authors = async() => {
    const route = "/blogs/authors"
    const api = deployed_domain + route

    const response = await fetch(api,{
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
    })

    if(!response.ok){
        console.log("response not ok"+ response.statusText)
    }

    const data = await response.json()
    console.log("all authors")
    console.log(data)
    return data.authors
}
