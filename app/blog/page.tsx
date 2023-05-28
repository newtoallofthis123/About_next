import Link from 'next/link';

export default function Blog() {
    return (
        <>
            <div
                style={{
                    marginTop: '8vw',
                }}
                className="normalize"
            >
                <div className='normal-div'>
                    <h1>Ishan Writes is now Noobing With The Noob</h1>
                    <p className="text-div">
                        Yep! I retired my old blog that I wrote. It is now
                        Noobing With The Noob.
                    </p>
                    <p>
                        So here's the thing, the age of having your personal
                        blogs that are hosted on your own domain is pretty much
                        over.
                    </p>
                    <p>
                        I mean, I still have my own domain, but I'm not using it
                        for my blog. I'm using it for my portfolio.
                    </p>
                    <p>
                        With blogging platforms like Medium, SubStack, Dev.to,
                        and Hashnode, it's just not worth it to have your own
                        blog.
                    </p>
                    <p>
                        So, from now, I will be writing my technical articles on
                        Hashnode and my thoughts on SubStack
                    </p>
                    <p>
                        I hope to see you there, all my previous articles are no
                        longer available on my old blog and I will be migrating
                        them to the new ones.
                    </p>
                    <div
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        <button
                            style={{
                                marginRight: '1rem',
                            }}
                            className="fancy_btn"
                        >
                            <Link href="/social/blog">Hashnode</Link>
                        </button>
                        <button className="fancy_btn">
                            <a href="https://noobscience.substack.com">
                                Substack
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
