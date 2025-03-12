

export const update_blog = async( blog_id,{title, content, img_url} ) => {
    const route = `/blogs/blog/${blog_id}`
    const api = process.env.REACT_APP_API_URL + route

    console.log(blog_id)
    console.log(title,content,img_url)

    const body = {
        method : "PUT",
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body:JSON.stringify({title,content,img_url})
    }

    const response = await fetch(api,body)
    if(!response.ok){
        throw new Error("error", response.statusText)
    }

    const data = await response.json()
    console.log(data)
    return data

}