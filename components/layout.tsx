import React from 'react';
import Nav from './nav';
import Footer from './footer';
import { Seo } from './seo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <>
            <Nav></Nav>
            <Seo></Seo>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            {children}
            <Footer></Footer>
        </>
    );
}
