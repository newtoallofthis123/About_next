"use client"
import React from 'react';
import Link from 'next/link';

type Props = {};

export default function SupIndex({}: Props) {
    return (
        <>
            <div className="page-div">
                <h1>Sup:</h1>
                <h3>Just to say something and get a shareable link</h3>
                <p>
                    You know how sometimes you want to say the same thing to a
                    bunch of people but you don't want to have to repeat
                    yourself? Well, now you can just say it once and share the
                    link with everyone. It's like a tweet but without the
                    character limit and you can edit it after you post it.
                </p>
                <div
                    style={{
                        margin: '1rem 0',
                    }}
                    className="btn_div"
                >
                    <button
                        style={{
                            width: '100%',
                        }}
                        className="fancy_btn"
                    >
                        <Link href="/sup/add">Add a Sup</Link>
                    </button>
                </div>
                <p>That's the idea behind sup.</p>
                <p>
                    The best part is that you can use markdown to format your
                    sup. So you can add links, images, and even code blocks. One
                    disclaimer though, this is a public forum so don't post
                    anything you don't want the world to see. Moreover, I am not
                    responsible for any content posted here. I will try to
                    moderate it but I can't guarantee that I will catch
                    everything.
                </p>
                <div className="img_div">
                    {/* eslint-disable-next-line */}
                    <img
                        style={{
                            width: '100%',
                        }}
                        src="/memes/sup.webp"
                        alt="sup"
                    />
                </div>
            </div>
        </>
    );
}
