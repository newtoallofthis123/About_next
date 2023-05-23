import "@/styles/globals.scss";
import "@/styles/home.scss";
import "@/styles/pages.scss";
import "@/styles/specials.scss";
import "@/styles/admin.scss";
import "@/styles/social.scss";
import "@/styles/third_party.scss";

import ServerNav from "@components/server_nav";
import Footer from "@components/footer";

export const metadata = {
  title: "NoobScience | Student and Open Source Enthusiast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <p>Hello World! This is so cool and awesome</p>
      <body>
        <ServerNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
