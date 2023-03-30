export default function handler(req, res) {
    res.status(200).json({ 
        site: "https://noobscience.rocks",
        name: "NoobScience",
        content: "Small API endpoint to use swr in my websites to fetch data from  MongoDB Atlas",
        do: "There is nothing to do here. So, I recommend you to go back to the home page.",
     })
}