import { connectToDatabase } from "@/utils/db";
import { hypens} from "@/utils/utils";

export default async function handler(req, res) {
    const { db } = await connectToDatabase();
    const data = await db.collection("code").find({}).toArray();
    res.json(data);
}