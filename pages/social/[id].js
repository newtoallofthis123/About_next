import React, {useState} from "react"
import Layout from "../../components/layout"
import data from "./data.json"
import { useRouter } from 'next/router'
import Router from "next/router"
import Link from "next/link"

export default function Social() {
    const router = useRouter()
    const { id } = router.query
    const param = id
    const getDb = () => {
        return data[param]
    }
    const handleNotFound = () => {
        if (param === undefined || !getDb()) {
            return (
                <Layout>
                    <h1 className="main-title">404</h1>
                </Layout>
            )
        }
    }
    handleNotFound()

    const useRedirect = (url, time) => {
        if (time === 0) {
            Router.push(url)
        }
    }

    const [time, setTime] = useState(10)
    setInterval(() => {
        if(time > 0) {
            setTime(time - 1)
        }
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
                <Link href="/">Click here</Link> to go back to the home page.
            </p>
        </Layout>
    )
    }