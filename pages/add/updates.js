import React from 'react'
import Router from 'next/router'

export default function UpdatesRedirect() {
    Router.push('/admin/updates')
    return (
        <div>Redirecting</div>
    )
}
