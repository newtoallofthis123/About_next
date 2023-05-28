"use client";
import Head from "next/head";

export default function LoadingScreen() {
  // const [message, setMessage] = useState("");
  // useEffect(() => {
  //   setMessage(loading_messages[Math.floor(Math.random() * loading_messages.length)]);
  // }, []);
  const message = "You seem like a lovely person 😊"

  return (
    <div className="loader">
      <Head>
        <title>Loading...</title>
      </Head>
      <div className="loader-text">
        <h1>Loading...</h1>
        <p>{message}</p>
      </div>
      <div className="loader-bar"></div>
    </div>
  );
}
