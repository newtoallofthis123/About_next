import React from "react";

import BlogNav from "./blog_nav"
import Settings from "./settings";

const BlogLayout = ({ children }) => {
    return (
        <div className="body">
            <BlogNav></BlogNav>
            <Settings></Settings>
            <div className="main">
                {children}
            </div>
        </div>
    )
}

export default BlogLayout