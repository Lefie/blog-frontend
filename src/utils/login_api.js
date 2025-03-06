const domain = "http://localhost:5050"
const deployed_domain = "blog-backend-production-0ee0.up.railway.app"

export const userLogin = async({username, password}) => {
    const route = "/users/login"
    const api = deployed_domain + route
    
    const response = await fetch(api,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({username,password}),
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
