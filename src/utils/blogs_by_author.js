import { all_blogs } from "./all_blogs"


export const blogs_by_author = async(author_name) => {
    const route =  `/blogs/blog/author/${author_name}`
    const api = process.env.REACT_APP_API_URL + route

    console.log(api, "before response")
    const response = await fetch(api, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
    })

    if (!response.ok){
        const errorData = await response.json()
        console.log(errorData)
        throw new Error('response not ok ??' + response.statusText)
    }

    const data = await response.json()
    console.log(data)
    return data 

}