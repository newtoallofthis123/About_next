import React from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

type Props = {
    pics: string[]
}

export default function PicsDiv({pics}: Props) {
    React.useEffect(() => {
        Fancybox.bind('[data-fancybox]', {
            // Your options go here
        });
    }, []);
    return (
        <>
            <div className="pics-div">
                {pics.map((pic, index) => (
                    <div
                        key={index}
                        data-src={pic}
                        data-fancybox="gallery"
                        className="pic"
                    >
                        <img src={pic} alt={'Meme Number: ' + index} />
                    </div>
                ))}
            </div>
        </>
    );
}