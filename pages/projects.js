import React from 'react'
import Layout from '@/components/layout'
import Link from 'next/link'

const Projects = () => {
    return (
        <Layout>
            <h1 className="main-title">I've been Busy</h1>
            <p className="main-subtitle">Here are some of the projects I've been working on.</p>
            <div style={{ backgroundColor: "var(--pink)", }} className="color-div">
                <h2>Before You Proceed</h2>
                <p style={{ marginTop: '1.2rem', }}>
                    As a hands-on learner, I have gained a wealth of experience through a diverse range of projects.
                    While not all of my endeavors have been successful, I believe that every experience has been valuable in helping me grow and improve.
                    The projects showcased on my portfolio are those that I am particularly proud of, but I invite you to explore my full range of work on my Github page.
                    There you will find a comprehensive collection of my projects, including updates and improvements made along the way. Thank you for considering my work.
                </p>
            </div>
            <div className="color-div">
                <h1>NoobPaste</h1>
                <p>
                    I am proud to introduce NoobPaste, my first independent web application development project.
                    This application, which serves as a replica of pastebin.com, was built using Flask for the back-end and Bootstrap and jQuery for the user interface.
                    One of the key features of NoobPaste is its emphasis on privacy, as it utilizes server-side encryption to ensure that neither I nor any other administrator can view users' private pastes.
                    Additionally, I am currently working on developing an admin page to manage all pastes on the platform.
                    This project is an ongoing effort and I welcome contributions on GitHub.
                </p>
                <div style={{ textAlign: 'center' }}>
                    <button style={{ backgroundColor: "var(--red)", margin: '1.8rem', }} className="link-btn"><a href="https://www.youtube-nocookie.com/embed/RepoBnHNx_A"><i className="bi bi-youtube"></i> Watch the Showcase</a></button>
                    <button style={{ backgroundColor: "var(--blue)", }} className="link-btn"><a href="https://github.com/newtoallofthis123/NoobPaste"><i className="bi bi-github"></i> Contribute on GitHub</a></button>
                </div>
            </div>
            <div style={{backgroundColor: "var(--red)",}} className="color-div">
                <h1>PEEP</h1>
                <p>
                    I love working in the command line and I wanted to streamline
                    the experience of working with a few aspects for a while now.
                    I have been working on a project called PEEP (Personalized Environment and Execution Prompt) for a while now.
                    It is a command line tool that gives you nifty little sub apps you can use.
                    It is a work in progress and I am working on adding more features to it.
                    It has stuff like a qr code generator, a semi online editor, a search feature and an inbuilt markdown editor
                    that can be used to create markdown files.
                    This was my first python project using classes, arguments and stuff like that and I quite proud of it.
                    Wanna try improve it? Check it out on GitHub.
                </p>
                <div style={{ textAlign: 'center' }}>
                    <button style={{ backgroundColor: "var(--violet)", margin: '1.8rem', }} className="link-btn"><a href="https://peep.noobscience.rocks"><i className="bi bi-globe"></i>Visit the Site</a></button>
                    <button style={{ backgroundColor: "var(--blue)", }} className="link-btn"><a href="https://github.com/newtoallofthis123/peep"><i className="bi bi-github"></i> Contribute on GitHub</a></button>
                </div>
            </div>
            <div style={{backgroundColor: "var(--blue)",}} className="color-div">
                <h1>Links</h1>
                <p>
                    Links is a simple custom link tree that I made for my social media accounts.
                    It's made using create-react-app and is hosted on GitHub Pages.
                    It was one of my first projects using React and I am quite proud of it.
                    I am currently working on adding a dark mode to it.
                    Links doesn't use any database and all the links are stored in a JSON file.
                    This json file is fetched and displayed on the page.
                    So, if you want to use it, you can fork it and edit the JSON file to add your links and 
                    Links should work fine for you.
                    Seems like a fun little project? Check it out on GitHub.
                </p>
                <div style={{ textAlign: 'center' }}>
                    <button style={{ backgroundColor: "var(--red)", margin: '1.8rem', }} className="link-btn"><a href="https://links.noobscience.rocks"><i className="bi bi-globe"></i>Visit the Site</a></button>
                    <button style={{ backgroundColor: "var(--yellow)", }} className="link-btn"><a href="https://github.com/newtoallofthis123/links"><i className="bi bi-github"></i> Contribute on GitHub</a></button>
                </div>
            </div>
            <div style={{backgroundColor: "var(--violet)",}} className="color-div">
                <h1>My Portfolio</h1>
                <p>
                    This site you are currently on is my portfolio and it is also my <Link href="/blog">blog</Link>.
                    It is built using Gatsby and is hosted on Netlify.
                    I had a lot of fun building this site and honestly, hats off to the Gatsby team for making such a great framework.
                    My portfolio was earlier built using create-react-app and I had to manually deploy it on GitHub Pages.
                    I had originally planned a vanilla JS site for my blog, but I decided to use Gatsby for my portfolio and blog.
                    Gatsby actually is faster in production than my previous site and it is also a lot easier to maintain.
                    This site is open source and you can fork and make it your own. Check it out on GitHub.
                </p>
                <div style={{ textAlign: 'center' }}>
                    <button style={{ backgroundColor: "var(--yellow)", margin: '1.8rem', }} className="link-btn"><a href="https://noobscience.rocks"><i className="bi bi-globe"></i>Visit the Site</a></button>
                    <button style={{ backgroundColor: "var(--blue)", }} className="link-btn"><a href="https://github.com/newtoallofthis123/About"><i className="bi bi-github"></i> Contribute on GitHub</a></button>
                </div>
            </div>
            <div style={{ backgroundColor: "var(--green)", }} className="color-div">
                <h1>HTMLer</h1>
                <p>
                    HTMLer is a simple markdown editor that I made mainly for writing my blog posts.
                    There are many good markdown editors out there, but I wanted to make one for myself that
                    would just do one thing and do it well.
                    So, all you do is write markdown and it will be converted to HTML.
                    You can then copy the HTML and paste it in your blog post.
                    That's it. It's that simple. No fancy features, no nothing.
                    It is actually a lot faster than most markdown editors out there.
                    It is built using plain old vanilla JS and it is hosted on GitHub Pages.
                    Quite a simple project, but I use it a lot and I am quite happy with it.
                    Wanna try it out? Check it out on GitHub.
                </p>
                <div style={{ textAlign: 'center' }}>
                    <button style={{ backgroundColor: "var(--red)", margin: '1.8rem', }} className="link-btn"><a href="https://htmler.noobscience.rocks"><i className="bi bi-globe"></i>Visit the Site</a></button>
                    <button style={{ backgroundColor: "var(--violet)", }} className="link-btn"><a href="https://github.com/newtoallofthis123/htmler"><i className="bi bi-github"></i> Contribute on GitHub</a></button>
                </div>
            </div>
        </Layout>
    )
}

export default Projects