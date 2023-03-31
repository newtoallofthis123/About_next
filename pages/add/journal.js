import React from 'react'
import Router from 'next/router'

export default function JournalRedirect() {
    Router.push('/admin/journal')
    return (
        <div>Redirecting</div>
    )
}
