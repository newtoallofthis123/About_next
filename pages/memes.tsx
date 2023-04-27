import PicsDiv from "@components/pics_div";
import Head from "next/head";
import Theme from "@components/theme";

type Props = {}

export default function Memes({}: Props) {
    return (
        <div className="page-div">
            <Head>
                <title>Noob Memes</title>
                <meta name="description" content="Noob Memes" />
            </Head>
            <h1>Noob Memes</h1>
            <p>I make a lot of memes! And I needed a place to put them all.</p>
            <p>
                So, here's my problem for now: How do I make a meme page that's
                not just a bunch of images? Moreover, speaking on the technical
                side, how do store all of these images in a way that's easy to
                access and update? I'm thinking of using a database, but I'm not
                sure how to do that yet. I'll have to do some research.
            </p>
            <p>
                Till then, I'll just put some of my favorite memes here and have
                a public GDrive folder
            </p>
            <button className="fancy_btn">
                <a
                    href="https://drive.google.com/drive/folders/1JRr53O99OJTGP1pVn_iiTGnoUMSGOySA?usp=share_link"
                    target="_blank"
                >
                    Check out my GDrive
                </a>
            </button>
            <div className="meme-div">
                <h1>Enjoy The Memes!</h1>

                <p>
                    Content Warning: Some of these memes may contain strong
                    language and/or sexual references. Viewer discretion is
                    advised.
                </p>
                <p>(Click on them to see them in full size)</p>
                <PicsDiv
                    pics={[
                        '/memes/thats_what_she_said.jpg',
                        '/memes/sem_exams.jpg',
                        '/memes/timepass_on_phone.jpg',
                        '/memes/affagado.jpg',
                    ]}
                />
                <p>
                    Stay tuned for more memes! I'll be adding more as I make
                    them.
                </p>
                <p>
                    Content Copyrighted to NoobScience
                </p>
                <p>
                    Memes made using Mematic
                </p>
                <Theme />
            </div>
        </div>
    );
}