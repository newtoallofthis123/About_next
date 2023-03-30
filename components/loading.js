import React from 'react'
import { Seo } from './seo'

export default function LoadingScreen() {
    return (
        <div class="loader">
            <Seo title="Loading From MongoDB"></Seo>
            <div class="loader-text">
                Can You Please Wait?
                <p>
                    NextJS is getting items from a remote MongoDB database.
                </p>
            </div>
            <div class="loader-bar"></div>
        </div>
  )
}
