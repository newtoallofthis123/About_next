'use client';
import '@/styles/globals.scss';
import '@/styles/home.scss';
import '@/styles/pages.scss';
import '@/styles/specials.scss';
import '@/styles/admin.scss';
import '@/styles/social.scss';
import '@/styles/third_party.scss';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
            <body>
                {children}
            </body>
    );
}
