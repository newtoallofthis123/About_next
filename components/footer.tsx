"use client";
import React from "react";
import Link from "next/link";
import Init from "./init";
import useSwr from "swr";

export default function Footer() {
  const [footer, setFooter] = React.useState(false);
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth > 1034) {
        setFooter(true);
      }
    }
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content two-content-divs">
        <div className="content">
          <h1 className="content__title">
            {/* eslint-disable-next-line */}
            <img src="/logo192.png" width="32" alt="" />
            NoobScience {new Date().getFullYear()}
          </h1>
          <ul>
            <li>
              All the website content and assets are intellectual property of
              NoobScience.
            </li>
            <li>The Code is licensed under the MIT License.</li>
            <li>
              <Init></Init>
            </li>
            <li>
              Source Code available on{" "}
              <Link href="/go/github">
                <i className="bi bi-github"></i> GitHub
              </Link>
            </li>
          </ul>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <button onClick={() => setFooter(!footer)} className="show__more">
              {footer ? "Hide " : "Show "}
              Links
            </button>
          </div>
        </div>
        <div
          style={
            footer
              ? {
                  fontFamily: "var(--font)",
                }
              : { display: "none" }
          }
          className="content different_links"
        >
          <div>
            <ul>
              <li
                style={{
                  textDecoration: "underline",
                }}
              >
                Links
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/skills">Skills</Link>
              </li>
              <li>
                <Link href="/social">Socials</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li
                style={{
                  marginLeft: "1rem",
                  textDecoration: "underline",
                }}
              >
                Socials
              </li>
              <li>
                <Link href="/social/twitter">
                  <i className="bi bi-twitter"></i>
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="/social/github">
                  <i className="bi bi-github"></i>
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="/social/ig">
                  <i className="bi bi-instagram"></i>
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="/social/yt">
                  <i className="bi bi-youtube"></i>
                  YouTube
                </Link>
              </li>
              <li>
                <a href="mailto:noobscience@duck.com">
                  <i className="bi bi-envelope"></i>
                  Mail
                </a>
              </li>
              <li>
                <Link href="/social/spotify">
                  <i className="bi bi-spotify"></i>
                  Spotify
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li
                style={{
                  textDecoration: "underline",
                }}
              >
                Other
              </li>
              <li>
                <Link href="/credits">Credits</Link>
              </li>
              <li>
                <Link href="/updates">Updates</Link>
              </li>
              <li>
                <Link href="/notes">Notes</Link>
              </li>
              <li>
                <Link href="/tos">TOS</Link>
              </li>
              <li>
                <Link href="/resume">Resume</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          padding: "1rem",
          borderTop: "2px solid var(--color)",
        }}
      >
        <p
          style={{
            margin: "0",
            padding: "0",
            textAlign: "center",
          }}
        >
          Made with{" "}
          <span>
            <i
              style={{
                color: "red",
                fontSize: "1.2rem",
              }}
              className="bi bi-heart-fill"
            ></i>
          </span>{" "}
          by Ishan.
        </p>
        <p
          style={{
            margin: "0",
            padding: "0",
            textAlign: "center",
          }}
        >
          There is only do or do not, there is no try.
            - Yoda
        </p>
      </div>
    </footer>
  );
}
