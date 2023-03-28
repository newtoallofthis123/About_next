import React, {useState, useEffect} from 'react'
import Layout from '@/components/layout'
import { Seo } from '@/components/seo';

const randomColor = () => {
    const option = Math.floor(Math.random() * 6)
    const colors = ["red", "blue", "yellow", "green", "violet", "pink"]
    return colors[option]
}

const RepositoryList = () => {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.github.com/users/newtoallofthis123/repos?sort=updated&per_page=20`);
            const data = await response.json();
            setRepositories(data);
        }
        fetchData();
    }, []);

    return (
        <div style={{ margin: "1.2rem" }}>
            <Seo title="Ishan's GitHub Repo's" description="GitHub" />
            {repositories.map((repo) => (
                <div style={{ backgroundColor: `var(--${randomColor()})`, }} className='repo' key={repo.id}>
                    {/* <img src={repo.owner.avatar_url} alt="UserPhoto" /> */}
                    <a className='a' href={repo.html_url}>{repo.full_name}</a>
                    <p>
                        {repo.description}
                    </p>
                    <button style={{ backgroundColor: `var(--white)`, }} className="link-btn"><a href={repo.html_url} className="link">View on GitHub</a></button>
                </div>
            ))}
        </div>
    );
}

export default function GitHub() {
    return (
        <Layout>
            <div className="github">
                <h1>GitHub</h1>
                <p>
                    Do you want to check out my GitHub
                </p>
                <button className='social-btn'>
                    <a style={{color: "var(--color)",}} href="https://github.com/newtoallofthis123/">github.com/newtoallofthis123/</a>
                </button>
                <p>Or Here are some of my GitHub repositories I recently commited to:</p>
                {RepositoryList()}
            </div>
        </Layout>
  )
}