import React from 'react';
import Form from '../Pages/AboutPage/Form';
import img from '../Assets/Images/blog.png';
import '../Assets/Styles/Blog.css';

const Blog = () =>{
    return(
        <>

        <img src={img} className="blog-image" alt="Blog Image"/>
        <Form/>
        </>
    );
}
export default Blog; 