import loading_messages from "@utils/loading_messages";

export default async function handler(req, res) {
  const data =
    loading_messages[Math.floor(Math.random() * loading_messages.length)];
  res.status(200).json(data);
}
