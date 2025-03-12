
export const userLogin = async({username, password}) => {
    const route = "/users/login"
    const api = process.env.REACT_APP_API_URL + route
    
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
