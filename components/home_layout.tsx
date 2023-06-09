"use client"
import React, { useState } from 'react';
import Footer from './footer';
import Link from 'next/link';
import Head from 'next/head';
import Special from '@components/special';

export default function HomeLayout({ children }) {
    const [nav, setNav] = useState(false);

    const navigate = (url: string) => {
        if (typeof window !== 'undefined') window.location.href = url;
    };

    const toggleNav = () => setNav(!nav);

    return (
        <>
            <Head>
                <title>NoobScience | Open Source Enthusiast</title>
            </Head>
            <div className="home">
                <Special />
                <nav>
                    <div className="nav" onClick={() => navigate('/')}>
                        <div className="nav__img">
                            {/* eslint-disable-next-line */}
                            <img src="/logo192.png" alt="logo" />
                        </div>
                        <div className="nav__title">
                            <h1>NoobScience</h1>
                        </div>
                    </div>
                    <div className="nav__content">
                        <ul>
                            {[
                                'about',
                                'blog',
                                'projects',
                                'skills',
                                'resume',
                                'updates',
                                'contact',
                                'journals',
                                'social',
                                'github',
                                'notes',
                            ].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={`/${link}`}
                                        className="underline"
                                    >
                                        {link.charAt(0).toUpperCase() +
                                            link.slice(1)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
                <>
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
                                <span
                                    role="button"
                                    onClick={() => navigate('/')}
                                >
                                    NoobScience
                                </span>
                                <button
                                    onClick={toggleNav}
                                    style={{
                                        fontSize: '1.2rem',
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
                                    'journals',
                                    'contact',
                                    'github',
                                    'social',
                                    'notes',
                                ].map((link) => (
                                    <li key={link}>
                                        <Link
                                            href={`/${link}`}
                                            className="underline"
                                        >
                                            {link.charAt(0).toUpperCase() +
                                                link.slice(1)}
                                        </Link>
                                    </li>
                                ))}
                            </span>
                        </ul>
                    </nav>
                </>
                {children}
                <Footer />
            </div>
        </>
    );
}
