
export const uploadimg = async(file) =>{
    
    const route = "/img/upload"
    const api = process.env.REACT_APP_API_URL + route

    console.log("from uploadimg util file",file)
    const formData = new FormData()
    formData.append('image',file)

    const response = await fetch(api,{
        method: 'POST',
        credentials: 'include',
        body : formData,
    })

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);
    return data

}