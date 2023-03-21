import Link from "next/link";
import React from "react";
import Image from "next/image";

const BlogNav = () => {
    return (
        <>
            <nav className="blog-nav">
                <ul>
                    <li><Link href="/blog" className="nav-title"> Ishan Writes...</Link></li>
                    <li><Link href="/blog/archive"><i class="bi bi-archive-fill"></i> Archives</Link></li>
                    <li><Link href="/blog/latest"><i class="bi bi-fire"></i> Latest</Link></li>
                    <li><Link href="/social/github"><i className="bi bi-github"></i> GitHub</Link></li>
                    <li>
                        <Link href="/"><i className="bi bi-braces"></i> Author</Link>
                    </li>
                </ul>
            </nav>
            <nav className="blog-m_nav">
                <ul>
                    <li><Link href="/blog" className="nav-title"> Ishan Writes...</Link></li>
                    <li><Link href="/blog/archive"><i class="bi bi-archive-fill"></i> Archives</Link></li>
                    <li><Link href="/blog/latest"><i class="bi bi-fire"></i> Latest</Link></li>
                    <li><Link href="/social/github"><i className="bi bi-github"></i> GitHub</Link></li> 
                    <li>
                        <Link href="/"><i className="bi bi-braces"></i> Author</Link>
                    </li>   
                </ul>
            </nav>
        </>
    )
}

export default BlogNav