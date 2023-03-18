import Link from "next/link"
import { useRouter } from 'next/router';
import React, { useState } from "react"
import Layout from '../../components/layout'
import { Seo } from '../../components/seo'
import data from './data.json'

export default function Go({ params }) {
    const param = params[`*`]
    const router = useRouter()
    const navigate = (url) => {
        router.push(url)
    }
    const getDb = () => {
        return data[param]
    }
    const [time, setTime] = useState(10)
    if (param === "") {
        return (
            <Layout>
                <div style={{ backgroundColor: "var(--violet)", }} className="color-div">
                    <h1 style={{ color: "var(--black)", }} className="main-title">Go to Places</h1>
                    <h2>Go to places from my site</h2>
                    <p>
                        You can only go to place that you know.
                        Because I use this as my personal link tracker and I don't want to share it with everyone.
                        If you want to go to a place, you can ask me to add it to the list by opening an issue on the <a href="/go/git">GitHub repo</a>.
                    </p>
                    <button style={{backgroundColor: "var(--green)",}} className="link-btn"><Link href="/go/git">Issue on GitHub</Link></button>
                </div>
            </Layout>
        )
    }
    else if (getDb()) {
        console.log(getDb())
        setInterval(() => {
            setTime(time - 1)
        }, 1000)
        if (time === 0) {
            navigate(getDb())
        }
        return (
            <Layout>
                <div style={{ backgroundColor: "var(--yellow)", }} className="color-div">
                    <h1 style={{ color: "var(--black)", }} className="main-title">Redirecting...</h1>
                    <h2>Redirecting to</h2>
                    <h2>{getDb()}</h2>
                    <h2>
                        in {time} seconds
                    </h2>
                </div>
            </Layout>
        )
    }
    else {
        navigate("/404")
        return (
            <div>
                <h1>
                    Not Found
                </h1>
            </div>
        )
    }
}

export const Head = () => {
    <Seo title="Go to Places | NoobScience" description="Go to places from my site"></Seo>
}