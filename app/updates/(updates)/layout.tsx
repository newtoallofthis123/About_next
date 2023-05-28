'use client';
import '@/styles/globals.scss';
import '@/styles/home.scss';
import '@/styles/pages.scss';
import '@/styles/specials.scss';

export default function UpdateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="page-div">
            {children}
        </div>
    );
}
