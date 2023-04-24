import { connectToDatabase } from "@/utils/db";
import { hypens} from "@/utils/utils";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { db } = await connectToDatabase();
        const slug = req.body.slug;
        const data = await db.collection("code").find({ hash: slug }).toArray();
        res.json(data[0]);
    }
    const { db } = await connectToDatabase();
    const {slug} = req.query;
    const data = await db.collection("code").find({ hash: slug }).toArray();
    res.json(data[0]);
}