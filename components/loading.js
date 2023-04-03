import React from 'react'
import { Seo } from './seo'

export default function LoadingScreen() {
    return (
        <div className="loader">
            <Seo title="Loading From MongoDB"></Seo>
            <div className="loader-text">
                Can You Please Wait?
                <p>
                    NextJS is getting items from a remote MongoDB database.
                </p>
            </div>
            <div className="loader-bar"></div>
        </div>
  )
}
