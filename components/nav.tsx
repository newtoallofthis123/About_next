import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Nav = () => {
    const [nav, setNav] = useState(false);
    const navigate = (url: string) => {
        window.location.href = url;
    };
    const toggleNav = () => {
        setNav(!nav);
    };
    return (
        <>
            <Head>
                <title>NoobScience | Open Source Enthusiast</title>
            </Head>
            <nav className="nav-normal-m">
                <ul>
                    <li className="nav-title">
                        {/* eslint-disable-next-line */}
                        <img
                            src="/logo192.png"
                            width="28"
                            style={{
                                verticalAlign: 'middle',
                                borderRadius: '24px',
                            }}
                            alt="NoobScience Icon"
                        />
                        <span role="button" onClick={() => navigate('/')}>
                            NoobScience
                        </span>
                        <button
                            onClick={toggleNav}
                            style={{
                                fontSize: '1.4rem',
                                margin: '0 1rem',
                            }}
                            id="op_toggle"
                        >
                            <i className="bi bi-list" id="nav_icon"></i>
                        </button>
                    </li>
                    <span style={nav ? {} : { display: 'none' }}>
                        {[
                            'about',
                            'blog',
                            'projects',
                            'skills',
                            'resume',
                            'updates',
                            'contact',
                            'github',
                            'social',
                            'notes',
                        ].map((link) => (
                            <li key={link}>
                                <Link href={`/${link}`} className="underline">
                                    {link.charAt(0).toUpperCase() +
                                        link.slice(1)}
                                </Link>
                            </li>
                        ))}
                    </span>
                </ul>
            </nav>
            <nav className="nav-normal">
                <ul>
                    {/* eslint-disable-next-line */}
                    <li className="nav-title">
                        {/* eslint-disable-next-line */}
                        <img
                            src="/logo192.png"
                            width="36"
                            style={{
                                verticalAlign: 'middle',
                                borderRadius: '24px',
                            }}
                            alt="NoobScience Icon"
                        />{' '}
                        <span
                            role="button"
                            onClick={() => {
                                navigate('/');
                            }}
                        >
                            NoobScience
                        </span>
                    </li>
                    <>
                        {[
                            'about',
                            'blog',
                            'projects',
                            'skills',
                            'resume',
                            'updates',
                            'contact',
                            'github',
                            'social',
                            'notes',
                        ].map((link) => (
                            <li key={link}>
                                <Link href={`/${link}`} className="underline">
                                    {link.charAt(0).toUpperCase() +
                                        link.slice(1)}
                                </Link>
                            </li>
                        ))}
                    </>
                </ul>
            </nav>
        </>
    );
};

export default Nav;
