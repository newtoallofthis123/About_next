import { useRouter } from 'next/router'
import useSwr from "swr"
import Layout from '@components/layout';
import LoadingScreen from '@components/loading';
import Highlight from '@components/highlight';
import { toast } from 'react-toastify';

type Props = {}

export default function CodeId({ }: Props) {
  const router = useRouter()
  const { id } = router.query
  const param = id
  const fetcher = (url:string) => fetch(url).then(res => res.json())
  const { data, error, isLoading } = useSwr(`/api/v2/code/get/${param}`, fetcher)
  if (isLoading) return <div><LoadingScreen></LoadingScreen></div>
  if (error) return <div>Failed to load</div>
if (data) {
        const code = data
        if(!code) return <div>404</div>
        if (code) {
            return (
                <Layout>
                    <div className="normalize">
                        <div className='notes_div'>
                            <h1>
                                {
                                    code.title
                                }
                            </h1>
                            <p>
                                Language: {String(code.lang).toUpperCase()}
                            </p>
                            <p>
                                Copy Code:
                                <button style={{
                                    marginLeft: '10px',
                                    padding: '5px',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    color: 'var(--color)',
                                    fontSize: '1.5rem',
                                    cursor: 'pointer'
                                }} onClick={() => {
                                    navigator.clipboard.writeText(code.content)
                                    toast("Code Copied!")
                                }}>
                                    <i className="bi bi-clipboard"></i>
                                </button>
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
