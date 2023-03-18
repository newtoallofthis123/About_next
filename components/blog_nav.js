import React from "react";

const BlogNav = () => {
    return (
        <>
            <nav className="blog-nav">
                <ul>
                    <li><a href="/blog" className="nav-title">Ishan Writes...</a></li>
                    <li><a href="archive.html">📦 Archives</a></li>
                    <li><a href="/blog/latest">👀 Latest</a></li>
                </ul>
            </nav>
            <nav className="blog-m_nav">
                <ul>
                    <li><a href="/blog" className="nav-title">Ishan Writes...</a></li>
                    <li><a href="archive.html">📦 Archives</a></li>
                    <li><a href="/blog/latest">👀 Latest</a></li>
                </ul>
            </nav>
        </>
    )
}

export default BlogNav