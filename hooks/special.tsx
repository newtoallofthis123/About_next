//? Highlights a special event on the website
//* Uses a dateHash to check if the current date is a special event
//* If it is, it will display a special banner on the website
//* The special event is defined in the cases array
//! Plans to move to a more dynamic system in the future
// TODO: Move to a more dynamic system

import React from 'react'
import { dateHash } from 'utils/utils'
import useSwr from 'swr'

type Props = {
}

type Case = {
    tag: string
    title: string
    description: string
    theme: string
    link: string
    hash: string
}

const Special = ({ }: Props) => {
    const [special, setSpecial] = React.useState<boolean>(false)
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data: cases, error } = useSwr('/api/v2/special', fetcher);
    (error && !cases) && setSpecial(false)
    console.log(dateHash())
    const current: Case = cases?.find((c: Case) => c.hash >= dateHash()) || null
    React.useEffect(() => {
        if (current) {
            setSpecial(true)
        }
    }, [current])
    return (
        <>
            {special && (
                <div onClick={() => {
                    (typeof(window) !== 'undefined') && window.open(current.link, '_blank')
                }} className={`special ${current.theme}`}>
                    <div className="special__title">
                        <span>
                            <h1>
                                {current.title}
                            </h1>
                        {current.description}
                        </span>
                    </div>
                    <span className="special__cancel">
                        <button onClick={() => {setSpecial(false)}} className="special__cancel-button">
                            <i className="bi bi-x"></i>
                        </button>
                    </span>
                </div>
            )}
        </>
  )
}

export default Special