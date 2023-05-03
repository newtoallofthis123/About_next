import React from 'react';
import Link from 'next/link';
import Init from './init';

export default function Footer() {
    const [footer, setFooter] = React.useState(false);
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth > 1034) {
                setFooter(true);
            }
        }
    }, []);
    return (
        <footer className="footer two-content-divs">
            <div className="content">
                <h1 className="content__title">
                    <img src="/logo192.png" width="32" alt="" />
                    NoobScience {new Date().getFullYear()}
                </h1>
                <ul>
                    <li>
                        All the website content and assets are intellectual
                        property of NoobScience.
                    </li>
                    <li>The Code is licensed under the MIT License.</li>
                    <li>
                        <Init></Init>
                    </li>
                    <li>
                        Made with{' '}
                        <span>
                            <i
                                style={{
                                    color: 'var(--yellow)',
                                }}
                                className="bi bi-heart-fill"
                            ></i>
                        </span>{' '}
                        by Ishan.
                    </li>
                </ul>
                <div
                    style={{
                        textAlign: 'center',
                    }}
                >
                    <button
                        onClick={() => setFooter(!footer)}
                        className="show__more"
                    >
                        {footer ? 'Hide ' : 'Show '}
                        Links
                    </button>
                </div>
            </div>
            <div
                style={footer ? null : { display: 'none' }}
                className="content different_links"
            >
                <div>
                    <ul>
                        <li
                            style={{
                                textDecoration: 'underline',
                            }}
                        >
                            Links
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link href="/skills">Skills</Link>
                        </li>
                        <li>
                            <Link href="/social">Socials</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li
                            style={{
                                marginLeft: '1rem',
                                textDecoration: 'underline',
                            }}
                        >
                            Socials
                        </li>
                        <li>
                            <Link href="/social/twitter">
                                <i className="bi bi-twitter"></i>
                                Twitter
                            </Link>
                        </li>
                        <li>
                            <Link href="/social/github">
                                <i className="bi bi-github"></i>
                                GitHub
                            </Link>
                        </li>
                        <li>
                            <Link href="/social/ig">
                                <i className="bi bi-instagram"></i>
                                Instagram
                            </Link>
                        </li>
                        <li>
                            <Link href="/social/yt">
                                <i className="bi bi-youtube"></i>
                                YouTube
                            </Link>
                        </li>
                        <li>
                            <a href="mailto:noobscience@duck.com">
                                <i className="bi bi-envelope"></i>
                                Mail
                            </a>
                        </li>
                        <li>
                            <Link href="/social/spotify">
                                <i className="bi bi-spotify"></i>
                                Spotify
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li
                            style={{
                                textDecoration: 'underline',
                            }}
                        >
                            Other
                        </li>
                        <li>
                            <Link href="/credits">Credits</Link>
                        </li>
                        <li>
                            <Link href="/updates">Updates</Link>
                        </li>
                        <li>
                            <Link href="/notes">Notes</Link>
                        </li>
                        <li>
                            <Link href="/tos">TOS</Link>
                        </li>
                        <li>
                            <Link href="/resume">Resume</Link>
                        </li>
                        <li>
                            <Link href="/services">Services</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
