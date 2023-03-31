import React from 'react'
import Router from 'next/router'

export default function AddRedirect() {
    Router.push('/admin')
    return (
    <div>Redirecting</div>
  )
}
