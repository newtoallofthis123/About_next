import { NextApiHandler } from "next"
import data from './data.json';

const handler: NextApiHandler = (req, res) => {
    res.status(200).json(data);
}

export default handler