import React from "react";
import './BlogList.css';
import { Blog } from "../../components/Blog/Blog";
import { Link } from 'react-router-dom';
// input blogs is an array of blog objects
// [{"title":"article name","author":"name"},{"title":"something","author":""name}]

export const BlogList = ({blogs}) => {
    //console.log(blogs)
    // todo : properly determine which ones get shown under "recent" and which ones get shown under "a while back"
    const not_recent = [blogs[2]]
    console.log(not_recent)
    return (
        <div className="blogpost">
            <div className='yellow-bar-top'> </div>
            <Link to="/"><h1 className="main-page">Blog</h1></Link>
            

            <div className="list-container">
                <div className="recent"> 
                    <h1>recent</h1> 
                    {blogs && blogs.map((blog)=> (

                        <Link to={`/blogs/${blog.title.replaceAll(" ","-").toLowerCase()}`}>
                        <Blog 
                            key = {blog.id}
                            title={blog.title} 
                            author={blog.author} 
                            date={blog.date}
                            content={blog.content} 
                            isContent={false}/>
                        </Link>
                    ))}
                </div>

                <div className="a-while-back">
                    <h1>a while back</h1>
                    {not_recent && not_recent.map(blog => (
                        <Blog 
                        key = {blog.id}
                        title = {blog.title}
                        author={blog.author}
                        date={blog.date}
                        content={blog.content}
                        isContent={false}
                        />
                    ))

                    }
                </div>
            </div>

            <div className='yellow-bar-bottom'></div>

        </div>
    )
}