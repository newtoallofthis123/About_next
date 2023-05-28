'use client';

type Props = {};

export default function Music({}: Props) {
    return (
        <>
            <div className="gap normalize">
                <div className="page-div">
                    <h1>Listen to Noob's Music</h1>
                    <p>
                        Listen to my curated playlist of music that I like. You
                        are free to listen to it, but I don't guarantee that you
                        will like it.
                    </p>
                    <iframe
                        style={{ borderRadius: '12px' }}
                        src="https://open.spotify.com/embed/playlist/11p4GVDQHOQk2R0ONtZEQl?si=807512e9b6354952"
                        width="100%"
                        height={352}
                        frameBorder={0}
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </>
    );
}
