import React from 'react'
import { Seo } from '@/components/seo'
import Router from "next/router"
import Link from 'next/link'

export default function NoGo() {
    const [time, setTime] = React.useState(5)
    setInterval(() => {
        setTime(time - 1)
        if(time === 0) {
            Router.push("/")
        }
    }, 1000)
    return (
        <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
        }}>
            <Seo title="You are not supposed to be here"></Seo>
            <h1>
                This is a custom redirection page.
            </h1>
            <p>
                You are not supposed to be here.
                The page will redirect to the home page in {time} seconds.
            </p>
            <p>
                I use this page to redirect to a array of urls stored in a json file.
                For privacy, I have not included the json file here.
                Although you can see the code for the page in the Github repo.
                So, err um...enjoy
            </p>
            <p>
                If you want to include your url here, send a pull request on the <Link href="/go/git">Github repo</Link>.
            </p>
            <p>
                BTW, yes! I can center a div using CSS.
            </p>
            <p>
                NoobScience 2023
            </p>
      </div>
  )
}
