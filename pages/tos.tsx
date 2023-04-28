import Layout from '@components/layout';
import Link from "next/link";

export default function Tos() {
    return (
        <Layout>
            <div className="normalize">
                <div style={{textAlign: "justify", marginTop: "8vw", fontFamily: "var(--font)"}} className="page-div bod">
                    <h1 className="atx" id="terms-of-service-1">Terms of Service</h1>
                    <h2 className="atx" id="tldr-summary">TLDR (Summary)</h2>
                    <p>By using our personal blog, you accept and agree to the following terms. We use Nextjs for site functionality, hosting on Vercel, <a href="https://Name.com">Name.com</a> domain service, and cookies to remember your last visit. We also display Google Ads. For legal information, read the advanced section below.</p>
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
                    <h2>
                        Legal Version
                    </h2>
                    <p>Greetings,</p>
                    <p>Thank you for choosing to visit our personal blog, hereinafter referred to as &quot;the Website.&quot; As the owner and operator of the Website, we have established these Terms of Service (&quot;Terms&quot;) to govern your access to and use of the Website and its services. By accessing, browsing, or using this Website, you are agreeing to be legally bound by these Terms.</p>
                    <p>The Website is powered by Nextjs and hosted by Vercel, with domain registration services provided by Name.com. By using the Website, you are acknowledging and accepting the terms and conditions set forth by these third-party service providers. In addition, our Website utilizes cookies to enhance your user experience, and by using the Website, you are consenting to our use of cookies in accordance with these Terms. Should you choose to decline cookies, please be advised that this may negatively impact your experience on the Website.</p>
                    <p>To help support the ongoing maintenance and development of our content, we display Google Ads on our Website. Your interaction with these ads is subject to the applicable terms and conditions and privacy policies of Google and its advertising partners. By continuing to use the Website, you are consenting to the display of Google Ads.</p>
                    <p>We reserve the right to modify, change, or update these Terms at any time, at our sole discretion. Such changes will be posted on this page, and your continued use of the Website after such changes have been posted constitutes your acceptance of the modified Terms. It is your responsibility to periodically review these Terms to stay informed of any updates.</p>
                    <p>We would also like to note that our personal blog and portfolio site is open source and the code is available on github.com under the MIT License. You are free to use the code as you see fit, but please be advised that the content of the Website is copyrighted and may not be modified or distributed in any way without our express consent.</p>
                    <p>Thank you for carefully reviewing these Terms of Service. By using our personal blog, you are agreeing to comply with these Terms, as well as all applicable laws and regulations. We appreciate your cooperation in upholding these Terms and thank you for choosing our Website.</p>
                    <p>Best regards,</p>
                    <p>Ishan Joshi,</p>
                    <p>
                        Resident of Telangana, India
                    </p>
                </div>
            </div>
    </Layout>
        
  )
}