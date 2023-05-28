'use client';

const Projects = () => {
    return (
        <>
            <div className="normalize">
                <div className="full-content-div">
                    <h1>Projects</h1>
                    <p className="text-div">
                        A showcase of projects I am most happy with. I have many
                        other projects that you can find on my GitHub. Feel free
                        to check them out. All my projects are open source and
                        you are always welcome to contribute. Most of these are
                        really close to my heart since most of them were made
                        while I was learning. So, I hope you enjoy them.
                    </p>
                </div>
                <div>
                    <div className="page-div two-normal-divs">
                        <div className="content content-rest content-div-yellow">
                            <div>
                                <iframe
                                    src="https://www.youtube-nocookie.com/embed/RepoBnHNx_A"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                                <b>YouTube Showcase</b>
                            </div>
                        </div>
                        <div className="content content-half content-div-blue">
                            <h2>NoobPaste</h2>
                            <p className="text-div">
                                One the first projects I ever worked on was a
                                pastebin clone. I created it using flask,
                                postgres, bootstrap and jquery. This was my
                                first attempt at Full Stack Development, and I
                                learned a lot from it. It is very close to my
                                heart. Although, due to the rate restrictions on
                                the free tier of Heroku, I have had to take it
                                down. It is still available on GitHub, and you
                                can find the link below. Feel free to
                                contribute.
                            </p>
                            <div className="btn__div">
                                <button
                                    style={{ backgroundColor: 'var(--pink)' }}
                                    className="fancy_btn"
                                >
                                    <a href="https://github.com/newtoallofthis123/NoobPaste">
                                        Source Code
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="page-div two-normal-divs">
                        <div className="content content-rest content-div-pink">
                            <div>
                                <img src="/assets/site/screenshot.png" alt="" />
                            </div>
                            <b>Screen Shot of Site</b>
                            <div>Taken on 2023-04-18</div>
                        </div>
                        <div className="content content-half content-div-blue">
                            <h2>This Website</h2>
                            <p className="text-div">
                                One of the biggest and most recent projects I
                                have worked on is this website. I created it
                                using Next.js, MongoDB and Sass. It is a
                                monorepo and is hosted on Vercel. It involves
                                various stuff like updates, admin panel, and
                                more. It took me a while to create, but I am
                                very happy with the result. What do you think?
                            </p>
                            <div className="btn__div">
                                <button className="fancy_btn">
                                    <a href="https://github.com/newtoallofthis123/About_next">
                                        Source Code
                                    </a>
                                </button>
                                <button className="fancy_btn">
                                    <a href="https://noobscience.rocks">
                                        Live Site
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="page-div two-normal-divs">
                        <div className="content content-rest">
                            <div>
                                <img
                                    style={{
                                        border: 'none',
                                    }}
                                    src="https://peep.noobscience.rocks/static/header.svg"
                                    alt=""
                                />
                            </div>
                            <b>PEEP Logo</b>
                            <div>
                                PEEP stands for Personalized Environment and
                                Execution Prompt It is a CLI with a lot of
                                features.
                            </div>
                        </div>
                        <div className="content content-half content-div-blue">
                            <h2>PEEP</h2>
                            <p className="text-div">
                                My favourite python project is PEEP. It is a CLI
                                with a lot of features. It helps you do various
                                things like editing your files quickly,
                                generating QRCodes, and more. It uses a lot of
                                libraries, and I have learned a lot from it. The
                                source code is available on GitHub, and you can
                                find the link below. Tell me what you think.
                            </p>
                            <div className="btn__div">
                                <button
                                    style={{ backgroundColor: 'var(--pink)' }}
                                    className="fancy_btn"
                                >
                                    <a href="https://github.com/newtoallofthis123/peep">
                                        Source Code
                                    </a>
                                </button>
                                <button
                                    style={{ backgroundColor: 'var(--pink)' }}
                                    className="fancy_btn"
                                >
                                    <a href="https://peep.noobscience.rocks">
                                        Learn More
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="page-div two-normal-divs">
                        <div className="content content-rest content-div-blue">
                            <div>
                                <iframe
                                    src="https://www.youtube-nocookie.com/embed/Y7MZqqcqWs4"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <b>YouTube Showcase</b>
                        </div>
                        <div className="content content-half content-div-yellow">
                            <h2>YTPS</h2>
                            <p className="text-div">
                                Not necessarily the best project I have worked
                                on, but it is quite fun. Welcome to YTPS, the
                                YouTube Terminal Search and Play. It is a CLI
                                that lets you search and play YouTube videos.
                                From the CLI, you can search for videos, play
                                them, and more. Now, be warned that it doesn't
                                use the YouTube API, so it is not very accurate.
                                It scrapes the YouTube website, using a number
                                of libraries. So, if you are interested in
                                something like this, check it out.
                            </p>
                            <div className="btn__div">
                                <button
                                    style={{ backgroundColor: 'var(--pink)' }}
                                    className="fancy_btn"
                                >
                                    <a href="https://github.com/newtoallofthis123/ytps">
                                        Source Code
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="text-div">
                    Just These for Now, will add more soon
                </h2>
            </div>
        </>
    );
};

export default Projects;
