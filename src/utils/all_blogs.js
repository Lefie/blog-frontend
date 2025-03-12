
export const all_blogs = async() => {
    const route = "/blogs/all"
    const api = process.env.REACT_APP_API_URL + route

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
