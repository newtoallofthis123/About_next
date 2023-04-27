import React from 'react'
import Layout from '@components/layout'
import Link from 'next/link'
import Aos from 'aos'

const About = () => {
    React.useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease-out',
            // once: true,
            disable: 'mobile',
        })
    }, [])
    return (
        <Layout>
            <div className="normalize">
                <div className="full-content-div content-div-yellow">
                    <h1 className='greetings'>
                        About The Noob
                    </h1>
                    <div className='about__div text-div'>
                        <p>
                            Lovely day to you! I'm Ishan, a 18 year old student from India.
                            A self taught programmer and a full stack web developer,
                            I'm currently looking into the world of machine learning and AI.
                            Other then that, you might find me lurking on the internet, reading 
                            interesting books, keeping up with the latest tech news or playing with my
                            lovely German Shepherd <Link href="/dog">Dog</Link> (It's called Lyka in case you were wondering).
                            However, before I go on and on about myself, if you mostly interested in my professional skills, 
                            please head over to my <Link href="/skills">Skills</Link> page.
                        </p>
                        <p>
                            I'm currently a student at <Link href="https://www.griet.ac.in/">GRIET</Link>, pursuing a B.Tech in Computer Science and Engineering.
                            It's in Hyderabad, India and Hyderabad's a pretty cool place to live in.
                            Anyways, I'm a pretty chill guy and I love to talk about tech, so if you want to talk about anything,
                            feel free to <Link href="/social">connect</Link> with me.
                            I started programming when I was 16 and I've been doing it ever since.
                            Python was the first language I learnt, but I've been working with JavaScript and React for the past year.
                            I'm also a big fan of open source and I love to contribute to open source projects.
                            All of my projects are open source and you can find them on my <Link href="/projects">Projects</Link> page. 
                        </p>
                    </div>
                </div>
                <div className="half-two-divs">
                    <div className="content content-half content-div">
                        <h1 className="content-title">
                            NoobScience?
                        </h1>
                        <div className="text-div">
                            <p>
                                I started to get into tech when I was about 17.
                                Trying different things in the world of tech, I found that I really enjoyed programming.
                                Python seemed like a good place to start, so I started learning Python.
                                Although technically, I had learnt a little HTML from <a href="https://freecodecamp.org">freeCodeCamp</a>.
                                I remember I was really excited to learn Python and I was really enjoying it.
                                So, when I was creating small projects in python, I wanted to share them with the world, but was hesitant to do so.
                                I was afraid that people would judge me for being a beginner and I was afraid that people would think that I was a noob.
                            </p>
                            <p>
                                So, why not make a strength out of it? I thought. Hence the name <em>NoobScience</em>.
                                Ever since that day, NoobScience has been a summary of my journey as a beginner in the world of tech.
                                So, yeah, that's the story behind the name. Find it interesting? Well, I do too! Let's <Link href="/social">connect</Link>!
                                Scrollll for more!
                            </p>
                        </div>
                    </div>
                    <div className="content content-rest content-div-pink">
                        <h1 className="content-title">
                            NoobScience Logo
                        </h1>
                        <div data-aos="fade-left" className="center-img">
                            <img src="/logo192.png" alt="profile" />
                            <p>
                                The logo is a simple lightning bolt, suggesting speed and simplicity.
                                The logo was originally created using <a href="https://github.com/enricocid/VectorifyDaHome">
                                    VectorifyDaHome
                                </a> and then edited to make it suit my needs.
                            </p>
                            <p>
                                TM and © NoobScience 2023
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
  )
}

export default About