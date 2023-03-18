import React from 'react'
import Layout from '@/components/layout'
import { Seo } from '@/components/seo'

export default function Resume() {
    return (
        <Layout>
                <iframe
                    title='Resume'
                    style={{
                        width: "100%",
                        height: "100vh",
                    }}
                src="https://drive.google.com/file/d/10DPMeKG3olUkViV_ae6kx2MkBz1IkQjE/preview"
                    frameborder="0"></iframe>
      </Layout>
  )
}

export const Head = () => {
    return (
        <Seo title="Ishan's Resume" description="Resume" />
    )
}
