import '@styles/globals.scss';
import '@styles/pages.scss';
import '@styles/admin.scss';
import '@styles/home.scss';
import '@styles/third_party.scss';

export const metadata = {
    title: 'NoobScience',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="collection_body">
                <div className="collection_nav">
                    <h1>The Noob's Index</h1>
                    <p>The Internet's Index Page (for noobs)</p>
                </div>
                <div>{children}</div>
                <div className="collection_nav">
                    <h3>Made with <i className="bi bi-nextjs"></i> by Ishan</h3>
                    <small>The Internet's Index Page (for noobs)</small>
                </div>
            </body>
        </html>
    );
}
