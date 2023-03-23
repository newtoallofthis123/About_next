import React from "react";
import Nav from "./nav"
import Settings from "./settings";
import Footer from "./footer";
import { Seo } from "./seo";

export default function Layout({ children }) {
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