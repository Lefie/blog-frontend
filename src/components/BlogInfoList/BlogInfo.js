import { useParams } from "react-router-dom"

export const BlogInfo = () => {
    const {blog_id} = useParams()
    console.log("the blog id is", blog_id)


    return <>
        <p>Blog</p>
    </>

}