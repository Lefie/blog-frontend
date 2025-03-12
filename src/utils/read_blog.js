
export const read_blog = async(blog_id) => {
    const route = `/blogs/blog/${blog_id}`
    const api = process.env.REACT_APP_API_URL + route
    
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
    //console.log(data)
    return data
        
}
