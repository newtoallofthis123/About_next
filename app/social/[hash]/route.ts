import data from "./data.json";
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
    const query: string = String(new URL(request.url).pathname.split("/").pop());
    return redirect(data[query]);
}
