import React from 'react'
import Router from 'next/router'
import Layout from '@/components/layout'

export default function IndexC() {
    React.useEffect(() => {
        setTimeout(() => {
            Router.push('/notes/c/basic')
        }, 1000)
    }, [])
  return (
      <Layout>
          <h1>Redirecting to C basics</h1>
    </Layout>
  )
}
