import Layout from '@components/layout';

export default function Credits() {
    return (
        <Layout>
            <div className="normalize">
                <div
                    style={{
                        marginTop: '8vw',
                    }}
                    className="page-div content-div-yellow"
                >
                    <h1 className="greetings">Credits</h1>
                    <div className="about__div text-div">
                        <p>
                            It all started when I wanted to redesign a old
                            website I made. I wanted to do it with the help of
                            my friends. So, don't ask me how, but it led to us
                            redesigning this website. I'm not the best at
                            designing, but I'm pretty good at coding. So, I did
                            the coding part plus added to the design. Moreover,
                            this website uses some of the most cool and amazing
                            technologies.
                        </p>
                        <h2>Technologies</h2>
                        <ol>
                            <li>
                                <a href="https://nextjs.org/">Next.js</a> - The
                                React Framework for Production
                            </li>
                            <li>
                                <a href="https://vercel.com/">Vercel</a> - The
                                best hosting platform for Next.js
                            </li>
                            <li>
                                <a href="https://www.figma.com/">Figma</a> - The
                                best design tool
                            </li>
                            <li>
                                <a href="https://mongodb.com">MongoDB</a> - The
                                NoSQL Database
                            </li>
                            <li>
                                <a href="https://www.npmjs.com/package/react-toastify">
                                    react-toastify
                                </a>{' '}
                                - For the cool toasts
                            </li>
                            <li>
                                <a href="https://michalsnik.github.io/aos/">
                                    AOS
                                </a>{' '}
                                - For Animating on Scroll
                            </li>
                            <li>
                                <a href="https://animate.style/">Animate.css</a>{' '}
                                - For the cool Animations
                            </li>
                            <li>
                                <a href="https://www.npmjs.com/package/sass">
                                    sass
                                </a>{' '}
                                - Because who wants plain css
                            </li>
                        </ol>
                        <h2>Assets</h2>
                        <p>
                            I used some of the best free assets from the
                            internet.
                        </p>
                        <ol>
                            <li>
                                <a href="https://www.figma.com/community/file/1216966408247057717/404-Error-page">
                                    404.svg
                                </a>
                            </li>
                            <li>
                                <a href="https://icons.getbootstrap.com/">
                                    Bootstrap Icons
                                </a>
                            </li>
                            <li>
                                <a href="https://inkscape.org/">
                                    Icon designed in Inkscape
                                </a>
                            </li>
                            <li>
                                <a
                                    href="
                            https://www.figma.com/
                            "
                                >
                                    Design in Figma
                                </a>
                            </li>
                        </ol>
                        <h2>Finally,</h2>
                        <p>
                            This would not be possible without the help of my
                            wonderful friends and mates. So, I would like to
                            thank them for their help.
                        </p>
                        <ol>
                            <li>
                                <a href="https://www.instagram.com/snehahaha.0408/">
                                    Sachin's
                                </a>{' '}
                                a.k.a Sneha Padhi
                            </li>
                            <li>
                                <a href="https://instagram.com/the_ansh4">
                                    Dalchini
                                </a>{' '}
                                a.k.a Devansh Kumar
                            </li>
                            <li>
                                <a href="https://www.instagram.com/prudhvi_05_/">
                                    PP
                                </a>{' '}
                                a.ka. Prudhvi
                            </li>
                            <li>
                                <a href="https://www.instagram.com/_anushkaa_kumar/">
                                    Anuska
                                </a>{' '}
                                a.ka. Anushka Kumar
                            </li>
                            <li>
                                <a href="https://www.instagram.com/_anushkaa_kumar/">
                                    Dhaniya
                                </a>{' '}
                                a.k.a Ram Kishan
                            </li>
                        </ol>
                        <p>And BTW, shout out to my parents :)</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
