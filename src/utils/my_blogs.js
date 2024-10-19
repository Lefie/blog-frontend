const domain = "http://localhost:5050"

export const myBlogs = async() => {
    const route = "/blogs/my_blogs"
    const api = domain + route
    
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
