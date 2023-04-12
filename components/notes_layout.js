import React from "react";
import Nav from "./nav"
import Settings from "./settings";
import Footer from "./footer";
import { Seo } from "./seo";
import Prism from "prismjs";

export default function NotesLayout({ children }) {
    React.useEffect(() => {
        Prism.highlightAll()
        document.documentElement.setAttribute("data-theme", "light")
        document.documentElement.setAttribute("data-font", "serif")
    })
    return (
        <div className="home">
            <Nav></Nav>
            <Seo></Seo>
            <Settings ></Settings>
            {children}
            <Footer></Footer>
        </div>
    )
}