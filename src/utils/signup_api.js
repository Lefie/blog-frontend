
const domain = "http://localhost:5050"
export const userSignup = async ({username, password, email}) => {
    const route = "/users/signup"
    const api = domain + route
    console.log(username, password,email,"from utils", "hitting api at",api)

    console.log(JSON.stringify({username,email,password}))
    const response = await fetch(api,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({username,email,password})
    })
    
    if(!response.ok){
        const errorData = await response.json()
        console.log("Error in response:", response.status, response.statusText,errorData);
        throw new Error("signup failed: " + errorData.err)
    }

    const data = await response.json();
    console.log(data)
    return data
}