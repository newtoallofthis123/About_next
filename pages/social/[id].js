import React, {useEffect, useState} from "react"
import Layout from "../../components/layout"
import data from "./data.json"
import { useRouter } from 'next/router'
import Router from "next/router"

export default function Social() {
    const router = useRouter()
    const { id } = router.query
    const param = id
    const getDb = () => {
        return data[param]
    }

    if (!getDb()) {
        setTimeout(() => {
            Router.push("/")
        }, 3000)
        return (
            <Layout>
                <h1 className="main-title">404</h1>
                <h2>Heading Back</h2>
            </Layout>
        )
    }

    const useRedirect = (url, time) => {
        if (time === 0) {
            Router.push(url)
        }
    }

    const [time, setTime] = useState(10)
        setInterval(() => {
            setTime(time - 1)
        }, 1000)
        useRedirect(getDb(), time)
        return (
            <Layout>
                <h1 className="main-title">Heading to...</h1>
                <a style={{ fontSize: "1.2rem", }} href={getDb()}>{getDb()}</a>
                <h1>in {time}</h1>
                <p>
                    Don't want to head to the site?
                </p>
                <p>
                    You can change your mind
                </p>
                <p>
                    <a href="/">Click here</a> to go back to the home page.
                </p>
            </Layout>
        )
    }