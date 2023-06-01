import {redirect} from 'next/navigation'

async function fetchFileJSON() {
    const res = await fetch(
        'https://raw.githubusercontent.com/newtoallofthis123/journals/main/info.json'
    );
    if (!res.ok) return 'Error: ' + res.status;
    return await res.json();
}

async function fetchFileContents(path: string) {
    const data = await fetchFileJSON();
    if (data["journals"][path] === undefined) return redirect('/404');
    const res = await fetch(
        'https://raw.githubusercontent.com/newtoallofthis123/journals/main/' + data["journals"][path]["path"]
    );
    if (res.status === 404) return redirect('/404');
    if (!res.ok) return 'Error: ' + res.status;
    return await res.text();
}

async function fetchNormalFile(path: string) {
    const res = await fetch(
        'https://raw.githubusercontent.com/newtoallofthis123/journals/main/' + path
    );
    // if (res.status === 404) return redirect('/404');
    if (!res.ok) return 'Error: ' + res.status;
    return await res.text();
}

export { fetchFileContents, fetchNormalFile, fetchFileJSON };