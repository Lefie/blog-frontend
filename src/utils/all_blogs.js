const domain = "http://localhost:5050"
const deployed_domain = "blog-backend-production-0ee0.up.railway.app"

export const all_blogs = async() => {
    const route = "/blogs/all"
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
    console.log("all blogs")
    console.log(data)
    return data
}
