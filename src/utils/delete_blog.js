
const domain = "http://localhost:5050"

export const delete_blog = async(blog_id) => {
    const route = `/blogs/blog/${blog_id}`
    const api = domain + route
    
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
