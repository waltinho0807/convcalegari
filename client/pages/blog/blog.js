import React from 'react';


import HeroPages from '../../components/form/HeroPages';

import Blog from '../../components/blog/Blog';
import BreadBlog from '../../components/blog/BreadBlog';
import BlogRelated from '../../components/blog/BlogRelated';

const BlogPage = ({currentUser})=>{
    return (
        <div>
            
            <HeroPages/> 
            <BreadBlog />
            <Blog/>
            <BlogRelated/>
            
        </div>
    )
   
}

export default BlogPage;