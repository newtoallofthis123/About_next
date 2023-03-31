import Layout from '@/components/layout'
import React from 'react'
import Link from "next/link";

export default function Tos() {
    return (
        <Layout>
            <div style={{textAlign: "justify", margin: "2vw", fontFamily: "var(--font)",}} className="bod">
                <h1 className="atx" id="terms-of-service">Terms of Service</h1>
                <p>generate the terms of service for my personal blog that uses nextjs, is hosted on vercel, uses name.com domain service and uses cookies for seeing last visited and also uses google ads. Generate a good amount. Generate a TLDR for beginners and rest should be advanced as if written by a lawyer. Don't use points, generate paragraphs</p>
                <h1 className="atx" id="terms-of-service-1">Terms of Service</h1>
                <h2 className="atx" id="tldr-summary">TLDR (Summary)</h2>
                <p>By using our personal blog, you accept and agree to the following terms. We use Nextjs for site functionality, hosting on Vercel, <a href="https://Name.com">Name.com</a> domain service, and cookies to remember your last visit. We also display Google Ads. For legal information, read the advanced section below.</p>
                <h2 className="atx" id="advanced-full-version---legal">Advanced (Full Version - Legal)</h2>
                <h3 className="atx" id="1-introduction">1. Introduction</h3>
                <p>Thank you for visiting our personal blog ("the Website"). The Website is owned and operated by _____ ("we", "us", "our"). These Terms of Service ("Terms") constitute a legally binding agreement between you, the person accessing or using the Website or its services, and us. Accessing, browsing, or using this Websiteindicates that you have read, understood, and agree to comply with and be bound by these Terms. If you do not agree with any part of these Terms, you must discontinue the use of the Website immediately.</p>
                <h3 className="atx" id="2-nextjs-vercel-and-namecom">2. Nextjs, Vercel, and <a href="https://Name.com">Name.com</a></h3>
                <p>Our Website utilizes Nextjs for site functionality and is hosted by Vercel. Our domain registration services are provided by <a href="%5Bhttps://Name.com%5D(http://Name.com)"></a><a href="http://Name.com">Name.com</a>. By using this Website, you acknowledge and accept the terms and conditions put forth by these third-party service providers.</p>
                <h3 className="atx" id="3-cookies">3. Cookies</h3>
                <p>Our Website utilizes cookies to improve your user experience, primarily by remembering your last visit to our site. By using our Website, you consent to our useof cookies in accordance with these Terms. You may, however, choose to decline cookies through your browser settings, but doing so may adversely affect your user experience on the Website.</p>
                <h3 className="atx" id="4-google-ads">4. Google Ads</h3>
                <p>We display Google Ads on our Website to help support the ongoing maintenance and development of our content. By using this Website, you consent to the display of Google Ads and acknowledge that your interaction with these ads is subject to the applicable terms and conditions and privacy policies of Google and its advertising partners.</p>
                <h3 className="atx" id="5-modifications-to-terms-of-service">5. Modifications to Terms of Service</h3>
                <p>We reserve the right to change, modify, or update these Terms at any time, at our sole discretion. Any changes made to the Terms will be updated on this page, and continued use of the Website after such changes have been posted constitutes your acceptance of the modified Terms. It is your responsibility to periodically review these Terms to keep yourself informed of any changes.</p>
                <h2 className="atx" id="open-source">Open Source</h2>
                <p>This blog and personal portfolio site is in itself open source and the code is available on <Link href="/social/github"></Link><a href="https://github.com">github.com</a> under the MIT License. You are free to use the code as you see fit. But the content is copy righted to us and you are not allowed to modify or distribute it in anyway possible. You are free to share it and copy it as you see fit</p>
                <h2 className="atx" id="conclusion">Conclusion</h2>
                <p>By using our personal blog, you accept and agree to abide by these Terms of Service. Make sure to thoroughly read and understand both the TLDR and Advanced sections, as they both provide important information about the use of our Website, the provided services, our policies, and your responsibilities. Thanks for taking the time to carefully read the Terms and we appreciate your cooperation in upholding them.</p>

            </div>
    </Layout>
        
  )
}
