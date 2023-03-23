import Layout from '@/components/layout'
import React from 'react'

export default function Update_Blog() {
    return (
        <Layout> 
            <div className="update_div">
                <h1>
                    Good Bye CRA
                </h1>
                <h1 className="title-emoji">
                    👋
                </h1>
                <p>
                    I have been using CRA for a while now and you served me well CRA.
                    But I have decided to move on to Next.js.
                </p>
                <p>
                    I mean, I know that's not a big deal but I am just trying to get used to Next.js.
                    So far, I am liking it.
                </p>
                <p>
                    Unlike half the people on the internet, I am not using tailwindcss.
                    I am using plain css and I am liking it.
                    Don't get me wrong, tailwindcss is great but hey! I am just a backend developer 
                    trying to learn frontend development.
                </p>
            </div>
      </Layout>
  )
}
