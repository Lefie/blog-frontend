import React from "react";
import './BlogView.css';


export const BlogView = ({title, author, date, content}) => {

    return (
        <>
            <h5>{title}</h5>
            <h6>{author}</h6>
            <h6>{date}</h6>
            <p>{content}</p>
        </>
    )

}
