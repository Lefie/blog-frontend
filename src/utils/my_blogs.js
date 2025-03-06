const domain = "http://localhost:5050"
const deployed_domain = "blog-backend-production-0ee0.up.railway.app"

export const myBlogs = async() => {
    const route = "/blogs/my_blogs"
    const api = deployed_domain + route
    
    const response = await fetch(api,{
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
    })

    if(!response.ok){
        const errorData = await response.json()
        console.log(errorData)
        throw new Error(errorData.error)
    }

    const data = await response.json()
    console.log(data)
    return data
        
}
