import React from 'react'
import { useRouter } from 'next/router'
import useSwr, { preload } from "swr"
import Layout from '@components/layout';
import LoadingScreen from '@components/loading';
import Highlight from '@components/highlight';

type Props = {}

export default function CodeId({ }: Props) {
  const router = useRouter()
  const { id } = router.query
  const param = id
  const fetcher = (url) => fetch(url).then(res => res.json())
  const { data, error, isLoading } = useSwr(`/api/v2/code/get/${param}`, fetcher)
  if (isLoading) return <div><LoadingScreen></LoadingScreen></div>
  if (error) return <div>Failed to load</div>
if (data) {
        const code = data
        if(!code) return <div>404</div>
        const param_id = code._id
        if (code) {
            return (
                <Layout>
                    <div className="normalize">
                        <div className='notes_div'>
                            <h1>
                                {
                                    String(code.title).toUpperCase()
                                }
                            </h1>
                            <p>
                                Language: {String(code.lang).toUpperCase()}
                            </p>
                                <Highlight language={code.lang}>
                                    {
                                        code.content
                                    }
                                </Highlight>
                        </div>
                    </div>
                </Layout>
            )
        } else {
            <div>404</div>
        }
    }
}
