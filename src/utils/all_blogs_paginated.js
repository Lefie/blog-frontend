export const all_blogs_paginated = async(page=1) => {
    const route = `/blogs/all-paginated?page=${page}`
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
    console.log("data from all page paginated",data)
    return data

}