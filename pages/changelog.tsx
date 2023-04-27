//? Component for the changelog page
//? This page is still a work in progress.
//* The Changelog page should be a dynamic page that fetches the changelog from the API
//* It should also link to a GitHub commit
//! Currently a WIP

import React from 'react'
import Layout from '@components/layout'

type Props = {}

export default function ChangeLog({}: Props) {
    return (
        <Layout>
            <div className="page-div normalize">
                <h1>
                    Change Log
                </h1>
                <p>
                    WIP: This page is still a work in progress.
                </p>
            </div>
      </Layout>
  )
}