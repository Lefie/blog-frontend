
const domain = "http://localhost:5050"
export const userSignup = async ({name, password, email}) => {
    const route = "/users/signup"
    const api = domain + route
    console.log(name, password,email,"from utils", "hitting api at",api)

    try {
        console.log(JSON.stringify({username:name,email,password}))
        const response = await fetch(api,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({username:name,email,password})
        })
       
        if(!response.ok){
            console.log("Error in response:", response.status, response.statusText);
        }else{
            const data = await response.json();
            console.log(data)
            console.log(typeof(data));
        }
    }catch(error){
        console.log(error)
    }
}