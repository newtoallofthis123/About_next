import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function Intro() {
    const [intro, setIntro] = React.useState(true)
    if (intro) {
        return (
            <div className="sticker animate__animated animate__fadeInLeft animate__delay-4s say_hi">
                <div className="intro">
                    <Image src="/favicon.ico" style={{ verticalAlign: "center", }} height="32" width="32" alt="NoobScience Icon" />
                    <span>
                        <h3>Ishan says</h3>
                    </span>
                    <span>
                        <button className="x-btn" onClick={() => {setIntro(false)}}><i className="bi bi-x"></i></button>
                    </span>
                </div>
                <div className="intro">
                    By visiting this site, you agree to the <Link href="/privacy">privacy policy</Link> and <Link href="/tos">terms of service</Link>.
                    <small>You'll only see this once</small>
                </div>
            </div>
        )
    }
    return null
}