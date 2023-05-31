import {redirect} from 'next/navigation'

async function fetchFileContents(path: string) {
    const res = await fetch(
        'https://raw.githubusercontent.com/newtoallofthis123/journals/main/' + path
    );
    if (res.status === 404) return redirect('/404');
    if (!res.ok) return 'Error: ' + res.status;
    return await res.text();
}

export default fetchFileContents;