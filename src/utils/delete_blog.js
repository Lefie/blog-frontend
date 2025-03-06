
const domain = "http://localhost:5050"
const deployed_domain = "https://blog-backend-production-0ee0.up.railway.app"

export const delete_blog = async(blog_id) => {
    const route = `/blogs/blog/${blog_id}`
    const api = deployed_domain + route
    
    const response = await fetch(api,{
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
    })

    if(!response.ok){
        const errorData = await response.json()
        console.log(errorData)
        throw new Error(errorData.error)
    }

    const data = await response.json()
    //console.log(data)
    return data
        
}
