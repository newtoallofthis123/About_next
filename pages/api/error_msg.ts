import error_messages from "@utils/error_messages";

export default async function handler(req, res) {
  const data =
    error_messages[Math.floor(Math.random() * error_messages.length)];
  res.status(200).json(data);
}
