//? Highlights a special event on the website
//* Uses a dateHash to check if the current date is a special event
//* If it is, it will display a special banner on the website
//* The special event is defined in the cases array
//! Plans to move to a more dynamic system in the future
// TODO: Move to a more dynamic system

import React from 'react'
import { dateHash } from 'utils/utils'

type Props = {
}

type Case = {
    title: string
    description: string
    theme: string
    date: string
}

const cases: Case[] = [
    {
        title: '🥳 Today is VSCode Day!',
        description: 'Catch the special event on the official website!',
        theme: 'green',
        date: '20230427'
    }
]

const Special = ({ }: Props) => {
    const [special, setSpecial] = React.useState<boolean>(false)
    const fetcher = () => {
        const timeHash = dateHash()
        const current: Case = cases.find((c) => c.date === timeHash) || null
        if (current) {
            setSpecial(true)
        }
    }
    React.useEffect(() => {
        fetcher()
    }, [])
    const timeHash = dateHash()
    const current: Case = cases.find((c) => c.date === timeHash) || null
    return (
        <>
            {special && (
                <div className={`special ${current.theme}`}>
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