'use client';
import React, { useState, useEffect } from 'react';
import Layout from '@components/layout';

const RepositoryList = () => {
    const [repositories, setRepositories]: any = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                `https://api.github.com/users/newtoallofthis123/repos?sort=updated&per_page=20`
            );
            const data = await response.json();
            setRepositories(data);
        }
        fetchData();
    }, []);

    return (
        <div style={{ margin: '1.2rem' }}>
            <ul>
                {repositories.map((repo) => (
                    <li
                        key={repo.id}
                        onClick={() => {
                            if(typeof window !== 'undefined')
                                window.open(repo.html_url)
                        }}
                        className="repo-item"
                    >
                        <div>
                            <div className="repo-name">
                                <a href={repo.html_url}>{repo.full_name}</a>
                            </div>
                            <div className="repo-description">
                                {repo.description}
                            </div>
                        </div>
                        <div className="repo-details">
                            <div className={`repo-language ${repo.language}`}>
                                {repo.language}
                            </div>
                            <div className="repo-stars">
                                {repo.stargazers_count}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default function GitHub() {
    return (
        <>
            <div className="normalize">
                <div className="full-content-div">
                    <h1>GitHub</h1>
                    <div
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        <div className="text-div">
                            <p>
                                Here are some of my GitHub repositories I
                                recently commited to:
                            </p>
                        </div>
                        <div>
                            <button className="fancy_btn">
                                <a
                                    href="
                                https://github.com/newtoallofthis123
                                "
                                >
                                    https://github.com/newtoallofthis123
                                </a>
                            </button>
                        </div>
                    </div>
                    {RepositoryList()}
                </div>
            </div>
        </>
    );
}
