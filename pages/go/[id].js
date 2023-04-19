import { useRouter } from 'next/router'
import useSWR from "swr"
import LoadingScreen from "@/components/loading"

export default function GoPage() {
    const router = useRouter()
    const { id } = router.query
    const param = id
    const fetcher = (url) => fetch(url).then(res => res.json())
    const { data, error } = useSWR('/api/v1/go', fetcher)
    if (error) return <div>No Such URL Shortened</div>
    if (!data) return <LoadingScreen />
    const link = data.find((go) => go.slug === param)
    if (!link) return <div>No Such URL Shortened</div>
    if (typeof window !== 'undefined') {
        if (link.url.includes("http://") || link.url.includes("https://")) {
            window.location.href = link.url
        } else {
            toast("Invalid URL")
            window.location.href = "/"
        }
    }
    return (
        <p>
            Redirecting to {link.url}
        </p>
    )
}