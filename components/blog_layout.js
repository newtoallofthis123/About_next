import Link from "next/link";
import React from "react";

import BlogNav from "./blog_nav"
import Settings from "./settings";

const BlogLayout = ({ children }) => {
    return (
        <div className="blog">
            <BlogNav></BlogNav>
            <Settings></Settings>
            <div className="main">
                {children}
            </div>
            <footer>
                <h2>
                    Ishan Writes 2023
                </h2>
                <p>
                    Intellectual property of <Link href="/">Ishan Joshi</Link> | Website licensed under MIT
                </p>
                <small>My thoughts and opinions are my own</small>
            </footer>
        </div>
    )
}

export default BlogLayout