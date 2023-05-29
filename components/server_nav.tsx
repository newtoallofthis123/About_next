"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const ServerNav = () => {
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
                        <span
                            style={{
                                marginLeft: '8px',
                            }}
                            role="button"
                            onClick={() => navigate('/')}
                        >
                            NoobScience
                        </span>
                        <button
                            onClick={toggleNav}
                            style={{
                                verticalAlign: 'middle',
                                borderRadius: '24px',
                            }}
                            id="op_toggle"
                        >
                            <span id="nav_icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    fill="currentColor"
                                    className="bi bi-list"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                                    />
                                </svg>
                            </span>
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
                                <Link
                                    style={{
                                        fontSize: '1.6rem',
                                    }}
                                    href={`/${link}`}
                                    className="underline"
                                >
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

export default ServerNav;
