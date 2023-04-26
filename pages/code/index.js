import React from 'react'
import Layout from '@/components/layout'
import Link from 'next/link'
import useSwr from "swr";
import LoadingScreen from "@/components/loading";
import { connectToDatabase } from "@/utils/db";

export default function Code({ data }) {
  return (
    <Layout>
        <div className="normalize">
              <div className="full-content-div notes__showcase content-div-yellow">
                <h1>
                    Interested in the Noob's Code Snippets?
                  </h1>
                  <ul style={{
                      textAlign: "center",
                  }}>
                      {
                          data.map((code) => {
                              return (
                                  <li key={code._id}>
                                      <Link href={`/code/${code.hash}`}>
                                          <p>
                                              {code.title}
                                          </p>
                                      </Link>
                                  </li>
                              )
                          }
                          )
                      }
                  </ul>
            </div>
        </div>
    </Layout>
  )
}

export async function getServerSideProps() {
    const { db } = await connectToDatabase();
    const response = await db.collection("code").find({}).toArray();
    const data = response.map(({ _id, ...rest }) => rest)
    if (!data) return {
        notFound: true,
    }
    return {
        props: {
            data,
        }
    }
}