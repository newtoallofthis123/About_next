'use client';
import '@/styles/globals.scss';
import '@/styles/home.scss';
import '@/styles/pages.scss';
import '@/styles/specials.scss';
import '@/styles/admin.scss';
import '@/styles/social.scss';
import '@/styles/third_party.scss';

import ServerNav from '@components/server_nav';
import Footer from '@components/footer';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
            <body>
                <ServerNav />
                {children}
                <Footer />
            </body>
    );
}
