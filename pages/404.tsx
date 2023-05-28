import React from "react";
import Layout from "@components/layout";
import Link from "next/link";
import Head from "next/head";
import error_messages from "@utils/error_messages";
import { useState, useEffect } from "react";

export default function NotFound() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    setMessage(error_messages[Math.floor(Math.random() * error_messages.length)]);
  }, []);
  return (
    <Layout>
      <Head>
        <title>404 - Page Not Found | NoobScience</title>
      </Head>
      <div className="normalize">
        <div className="not-found-div">
          <div className="content-main">
            <h1>Page Not Found</h1>
            <p>
              {message}
            </p>
            <p>
              This is a 404 Error. If you are wondering how you ended up here,
              don't worry, it's not your fault. It's probably mine. So, let me
              know.
            </p>
            <div>
              <button className="fancy_btn">
                <Link href="/">Go back</Link>
              </button>
            </div>
          </div>
          <div className="content">
            <div className="center-img">
              <img src="/assets/404.svg" alt="404 Image"></img>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
