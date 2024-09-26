import React, { useState } from "react";
import './Blog.css';
import { useParams } from "react-router-dom";
import data from '../../blogs.json'
import { Link } from "react-router-dom";
import { BlogView } from "../../views/BlogView/BlogView";
import { DropDown } from "../Dropdown/Dropdown";

export const Blog = ({title,author,date,content,isContent}) => {

    const { name } = useParams()

    if(name){
        for(let i = 0; i < data.length; i++){
            const blog_name= data[i].title.toLowerCase()
            const name_modified = name.replaceAll("-"," ")
            
            if(blog_name === name_modified){
                const blog = data[i]
                return (
                <div className="blog-content">
                    <div className='yellow-bar-top'> </div>
                    <DropDown />
                    <Link to="/"><h1 className="main-page">Blog</h1></Link>
                    <BlogView 
                    title={blog.title}
                    author={blog.author}
                    date={blog.date}
                    content={blog.content}
                    />
                    <div className='yellow-bar-bottom'></div>
                </div>
                )
            }
        }

    }else {
        if(isContent === false) {
            return (
                <div className="blog-list">
                    <Link to={`/blogs/${title.replaceAll(" ","-").toLowerCase()}`}>
                        <h5>{title}</h5>
                    </Link>
                    <h6>{author}</h6>
                    <h6>{date}</h6>
                </div>
            )
        }else {
            return (
                <div className="blog-content">
                    <h1>{title}</h1>
                    <h4>{author}</h4>
                    <h6>{date}</h6>
                    <p>{content}</p>
                </div>
            )
        }

    }
    
    
}