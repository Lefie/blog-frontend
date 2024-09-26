import React, { useState } from "react";
import './Blog.css';
import { useParams } from "react-router-dom";
import data from '../../blogs.json'
import { Link } from "react-router-dom";

export const Blog = ({title,author,date,content,isContent}) => {

    const { name } = useParams()

    if(name){
        for(let i = 0; i < data.length; i++){
            const blog_name= data[i].title.toLowerCase()
            const name_modified = name.replaceAll("-"," ")
            if(blog_name === name_modified){
                return (
                <div className="blog-content">
                    <h5>{data[i].title}</h5>
                    <h6>{data[i].author}</h6>
                    <h6>{data[i].date}</h6>
                    <p>{data[i].content}</p>
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