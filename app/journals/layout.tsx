'use client';
import '@/styles/globals.scss';
import '@/styles/home.scss';
import '@/styles/pages.scss';
import '@/styles/specials.scss';
import '@/styles/admin.scss';
import '@/styles/social.scss';
import '@/styles/third_party.scss';
import Footer from '@components/footer';
import Link from 'next/link';
import { dateHash } from '@utils/utils';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <body className='home'>
            <title>Journals | NoobScience</title>
            <nav className='journal-nav'>
                <h1 className="nav-title">
                    Noobing At Life
                </h1>
                <h3>
                    The Noob's Journals, Thoughts and Ideas
                </h3>
            </nav>
            <div className="journal">
                <div className="journal-content">{children}</div>
            </div>
            <footer className="journal-footer">
                <h3>
                    Views of and Validated by NoobScience
                </h3>
                <p>
                    Sorry if you were offended by anything on this site. I'm a Noob<sup>TM</sup> at life, and I'm still learning.
                </p>
            </footer>
        </body>
    );
}
