import React from 'react'
import Router from 'next/router'

export default function NewsRedirect() {
    Router.push('/admin/news')
    return (
        <div>Redirecting</div>
    )
}
