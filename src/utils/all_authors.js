const domain = "http://localhost:5050"

export const authors = async() => {
    const route = "/blogs/authors"
    const api = domain + route

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
