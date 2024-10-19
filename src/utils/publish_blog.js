const domain = "http://localhost:5050"
export const publish = async({title, content,imageurl}) => {
    const route = "/blogs/create-blog"
    const api = domain + route

    const response = await fetch(api,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body:JSON.stringify({title,content,img_url:imageurl})
    })

    if(!response.ok){
        throw new Error(`error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);
    return data
}