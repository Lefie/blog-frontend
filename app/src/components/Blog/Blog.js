import React from "react";
import './Blog.css';

export const Blog = ({title,author,date,content,isContent}) => {
    if(isContent === false) {
        return (
            <div className="blog-list">
                <h5>{title}</h5>
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