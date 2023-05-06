import { useRouter } from 'next/router';
import useSWR from 'swr';
import LoadingScreen from '@components/loading';
import NotFound from '@pages/404';

type Go = {
    _id: string;
    slug: string;
    url: string;
};

export default function GoPage() {
    const router = useRouter();
    const { id } = router.query;
    const param = id;
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('/api/v1/go', fetcher);
    if (error) return <div>No Such URL Shortened</div>;
    if (!data) return <LoadingScreen />;
    const link = data.find((go: Go) => go.slug === param);
    if (!link) return <><NotFound></NotFound></>;
    if (typeof window !== 'undefined') {
        if (link.url.includes('http://') || link.url.includes('https://')) {
            window.location.href = link.url;
        } else {
            window.location.href = '/';
        }
    }
    return <p>Redirecting to {link.url}</p>;
}
