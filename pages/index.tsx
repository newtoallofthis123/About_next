"use client"
import React from "react";

import HomeLayout from "@components/home_layout";
import Link from "next/link";
import Head from "next/head";
import useSwr from "swr";
import AOS from "aos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type Note = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  content: string;
};

type Update = {
  _id: string;
  name: string;
  content: string;
  hash: string;
  date: string;
};

const Home = () => {
  //? For the animation
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      disable: "mobile",
    });
    AOS.refresh();
  }, []);

  //* Fetching data from the API
  //! To be replaced with a better API
  // TODO: Replace with a better API

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSwr("/api/v1/updates", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateOnMount: true,
  });
  const { data: blog_data, error: blog_error } = useSwr("/api/all", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateOnMount: true,
  });
  const { data: notes_data, error: notes_error } = useSwr(
    "/api/v2/notes/all",
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateOnMount: true,
    }
  );
  let count = 0;
  let notes_count = 0;
  const time = () => {
    const date = new Date();
    const hours = date.getHours();
    if (hours < 12) {
      return "Hope you are having a great morning";
    } else if (hours < 18) {
      return "Great Noon to you";
    } else {
      return "Hope you are having a fun night";
    }
  };
  return (
    <HomeLayout>
      <Head>
        <title>NoobScience | Open Source Enthusiast</title>
      </Head>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="two-content-divs">
        <div className="animate__animated animate__fadeInDown hero content content-div-yellow">
          <h1 className="hero__title">Meet The Noob</h1>
          <div className="hero__text">
            {time()}! I am Ishan Joshi and I like to talk tech. Currently at{" "}
            <Link href="https://greit.ac.in">GRIET</Link>, I am pursuing my
            Bachelors in Computer Science. You might find me in India, but
            mostly, it is fun living on the <i className="bi bi-globe"></i>{" "}
            <Link href="/social">Internet</Link>. Anyways, a little quirky and a
            lot of fun, I think I am a pretty cool guy. So, let's get to know
            each other.
          </div>
          <div className="hero__btn">
            <button className="fancy_btn">
              <Link href="/about">Let's Get Going</Link>
            </button>
          </div>
          <div className="hero__text">
            Or you know, I can take you on a tour of my{" "}
            <Link href="/projects">Projects</Link> or my{" "}
            <Link href="/blog">Blog</Link>. Better yet, just scrollllllllllll
          </div>
        </div>
        <div className="animate__animated animate__fadeInUp content content-div-blue">
          <div className="center-img">
            {/* //! I know this is not good practice, but it is a temporary solution */}
            {/* // TODO: Design a better solution */}
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img
              width="auto"
              height="auto"
              src="/assets/profile.png"
              alt="profile"
              onContextMenu={(e) => {
                e.preventDefault();
                toast.warn("I mean, you can try.");
              }}
            />
            <h2
              style={{
                textAlign: "center",
                fontSize: "2.5rem",
                fontWeight: "bold",
                textDecoration: "underline",
                textDecorationThickness: "0.8rem",
                lineHeight: 1,
              }}
            >
              The Noob
              <Link
                style={{
                  textDecoration: "none",
                  cursor: "text",
                }}
                href="/admin"
              >
                <sup>TM</sup>
              </Link>
            </h2>
            <p
              style={{
                textAlign: "center",
                fontSize: "1.2rem",
                lineHeight: 1,
              }}
            >
              No seriously, that's me
            </p>
          </div>
        </div>
      </div>
      <div
        className="full-content-div content-div-green"
      >
        <div className="notification">
          <div className="notification__text">
            <h1>What's Up?</h1>
            <div
              style={{
                backgroundColor: "var(--white)",
                color: "var(--black)",
                padding: "1.5rem",
                borderRadius: "1rem",
                boxShadow: "0.3rem 0.4rem var(--black)",
                cursor: "pointer",
                border: "0.2rem solid var(--black)",
              }}
              onClick={() => {
                typeof window !== "undefined" &&
                  (window.location.href = `/updates/latest`);
              }}
              className="full-page-div"
            >
              {error ? (
                <>Error Loading</>
              ) : !data ? (
                <>Loading</>
              ) : (
                <ul
                  style={{
                    listStyle: "none",
                  }}
                >
                  {data
                    .slice(0)
                    .reverse()
                    .map((update: Update, index: number) => {
                      if (index !== 0) {
                        return null;
                      }
                      return (
                        <li key={update._id}>
                          <div>
                            <h1>{update.name}</h1>
                            <p>{update.date}</p>
                            <ReactMarkdown>
                              {update.content.slice(0, 400) + "..."}
                            </ReactMarkdown>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              )}
            </div>
            <div>
              <h1>Site Update</h1>
              <p>
                The current version of the site is v.5.0. It is a long term release 
                for my site. All the components are dynamic. So I can update them directly 
                from database or the custom CMS I made.
                The site is now 80% written using the latest NextJS 13.4's app/ directory.
                I am working on the remaining 20%.
                Most of the components seem to work and perform the same way as they did before.
                However, some of them are now less pwax friendly. I am working on that.
                The site is now mostly responsive. I've added a few more breakpoints.
                Moreover, the I have deprecated a few old pages that were just not needed.
                Overall, you should feel the site to be faster and more responsive.
                Any bugs you find, please report them to me. I'll try to fix them as soon as possible.
                Report the bugs on the site's <Link href="/i/bugtracker">GitHub</Link> page.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="half-two-divs">
        <div data-aos="fade-up" className="content content-half">
          <div className="showcase-div">
            {blog_error ? (
              <>Error Loading</>
            ) : !blog_data ? (
              <>Loading</>
            ) : (
              <div
                className="animate__animated animate__fadeIn"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  window.location.href = `${blog_data.blogs[0].slug}`;
                }}
                key={blog_data.blogs[0].id}
              >
                <h1>{blog_data.blogs[0].title}</h1>
                <div className="center-img">
                  {/*eslint-disable-next-line @next/next/no-img-element*/}
                  <img
                    src={`${blog_data.blogs[0].img}`}
                    alt="Blog Post Image"
                  />
                </div>
                <div className="text-div">
                  <p>{blog_data.blogs[0].description}</p>
                </div>
                <div className="hero__btn">
                  <button
                    style={{
                      width: "100%",
                      backgroundColor: "var(--yellow)",
                    }}
                    className="fancy_btn"
                  >
                    <a href={`${blog_data.blogs[0].slug}`}>Read More</a>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="content content-rest">
          <div className="col-divs">
            <>
              <div
                data-aos="fade-left"
                className="content content-half content-div-pink"
              >
                <h1>Updates</h1>
                <p>Here are some of my latest updates:</p>
                {error ? (
                  <>Error Loading</>
                ) : !data ? (
                  <>Loading</>
                ) : (
                  data
                    .slice(0)
                    .reverse()
                    .map((update: Update) => {
                      const url = "/updates/" + update.hash;
                      count++;
                      if (count < 6) {
                        return (
                          <div className="update" key={update._id}>
                            <ul
                              style={{
                                listStyle: "none",
                                lineHeight: "1.5rem",
                                padding: "0 0.5rem",
                              }}
                            >
                              <li key={update.hash}>
                                <Link href={url}>{update.name}</Link>
                              </li>
                            </ul>
                          </div>
                        );
                      }
                    })
                )}
              </div>
            </>
            <div
              style={{
                border: "3px solid var(--color)",
              }}
              className="content content-half"
            >
              <h1>Latest Notes</h1>
              <p>Here are some of my latest notes:</p>
              {notes_error ? (
                <p>Error Loading</p>
              ) : !notes_data ? (
                <p>Loading</p>
              ) : (
                notes_data
                  .slice(0)
                  .reverse()
                  .map((note: Note) => {
                    const url = "/notes/" + note.slug;
                    notes_count++;
                    if (notes_count < 6) {
                      return (
                        <div className="update" key={note._id}>
                          <ul
                            style={{
                              listStyle: "none",
                              lineHeight: "1.5rem",
                              padding: "0 0.5rem",
                            }}
                          >
                            <li key={note.slug}>
                              {note.category}:{" "}
                              <Link href={url}>{note.title}</Link>
                            </li>
                          </ul>
                        </div>
                      );
                    }
                  })
              )}
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Home;
