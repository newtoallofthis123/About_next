import { NextApiHandler } from "next";

async function fetchFileJSON() {
    const res = await fetch(
        'https://raw.githubusercontent.com/newtoallofthis123/journals/main/blogs.json'
    );
    if (!res.ok) return 'Error: ' + res.status;
    return await res.json();
}

async function handler(req, res): Promise<void>{
    const data = await fetchFileJSON();
    res.status(200).json(data);
};

export default handler;
