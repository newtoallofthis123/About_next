import React from "react";
import Nav from "./nav"
import Footer from "./footer";
import { Seo } from "./seo";
import hljs from "highlight.js";

export default function NotesLayout({ children }) {
    React.useEffect(() => {
        hljs.highlightAll();
        document.documentElement.setAttribute("data-theme", "light")
        document.documentElement.setAttribute("data-font", "serif")
    })
    return (
        <div>
            <Nav></Nav>

            <div className="page-div">
                <Seo></Seo>
                {children}
                <Footer></Footer>
            </div>
        </div>
    )
}