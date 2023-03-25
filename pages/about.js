import React from 'react'
import Layout from '@/components/layout'
import Link from 'next/link'
import profile from "@/static/images/profile-light.webp"

const About = () => {
    const time = () => {
        const date = new Date()
        const hours = date.getHours()
        if (hours < 12) {
            return "Good Morning"
        } else if (hours < 18) {
            return "Good Afternoon"
        } else {
            return "Good Evening"
        }
    }
    return (
        <Layout>
            <div className="home">
                {/* <h1 className='main-title'>Hello! I am Ishan</h1> */}
                <div style={{backgroundColor: "var(--green)",}} className="color-div">
                    <h1>Who are you?</h1>
                    <p>
                        {time()}! I am Ishan. I am a tech-savvy student with a passion for software development, I am constantly seeking new opportunities to learn and grow in the field.
                        My primary focus is on building full stack applications using the Flask API and MERN stack.
                        Known online as NoobScience, I am also a strong advocate for open source software and Linux.
                        Currently, I am studying computer science and engineering at <a href="http://griet.ac.in">GRIET</a>, where I specialize in coding with Python, and am also expanding my skills in JavaScript.
                        I am passionate about understanding how software works, and particularly enjoy diving deep into the inner workings of applications and open source projects that aim to replace proprietary alternatives.
                        With a strong foundation in technology and a deep love for open source software, I am excited to continue exploring new opportunities in the field. Let's <a href="https://newtoallofthis123.github.io/tree">connect</a>!
                    </p>
                </div>
                <div style={{ backgroundColor: "var(--blue)", }} className="color-div">
                    <h1>Interests</h1>
                    <p>
                        As a versatile individual with a passion for technology, I am constantly engaged in a variety of activities.
                        Whether I am on my computer exploring the latest advancements in software development or spending time with friends and my beloved dog, Lyka,
                        I am always striving to learn and grow. My interests include playing games such as Minetest and Rocket League,
                        as well as following the latest developments in esports.
                        Additionally, I enjoy writing and sharing my thoughts and ideas through my active Twitter presence and personal blog.
                        With a strong background in software development and a love for creating, I am excited to continue pursuing new opportunities and challenges in this field.
                    </p>
                </div>
                <div style={{ "backgroundColor": "var(--white)", }} className="color-div">
                    <h1>Random</h1>
                    <div className='random-div'>
                        <div style={{ textAlign: 'center', }}>
                            <img src={profile.src} width="360" className='img' id="profile" style={{ verticalAlign: "middle", borderRadius: "24px", padding: '12px', }} alt="" />
                        </div>
                        <div className='div-content'>
                            <p>
                                As a tech-savvy individual with a passion for innovation and experimentation, I am currently focused on mastering the JAMStack and exploring the MERN stack for web development.
                                I am also deeply interested in the world of AI, and am fascinated by the capabilities of language models like ChatGPT.
                                I have a broad range of interests and am always open to discussing new topics and ideas.

                                My personal tech setup includes a Lenovo ideapad3 laptop, a Samsung M13 Android phone, and a fitness tracker.
                                I am a huge fan of customizing my software to suit my needs and preferences, and I am always looking for ways to improve my workflow and productivity.

                                I am also active on Github and am open to contributing to open-source projects or collaborating with other developers.
                                If you're interested in connecting or working together, feel free to reach out to me via <a href="mailto:noobscience@duck.com" className="link">mail</a>. Let's connect and see how we can <Link href="/projects">create</Link> something amazing together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
      </Layout>
  )
}

export default About