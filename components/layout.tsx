import React from "react";
import Nav from "./nav"
import Footer from "./footer";
import { Seo } from "./seo";

type Props = {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Nav></Nav>
            <Seo></Seo>
            {children}
            <Footer></Footer>
        </>
    )
}