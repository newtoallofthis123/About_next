import React, { useState } from "react"
import Layout from "@/components/layout"
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

    const [time, setTime] = useState(1)
    setInterval(() => {
        setTime(time - 1)
    }, 1000)
    useRedirect(getDb(), time)
    return (
        <Layout>
            <h1 className="main-title">Redirecting...</h1>
        </Layout>
    )
}