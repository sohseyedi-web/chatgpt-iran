import queryApi from "../../lib/queryApi";
import Logo from '../../public/logo.svg';
import admin from 'firebase-admin'

export default async function handler(req, res) {
  const { prompt, user, chatId } = req.body;

  if (!prompt) return;

  try {
    const response = await queryApi(prompt);

    const message = {
      text: response || "Sorry",
      createdAt: admin.firestore.Timestamp.now(),
      user: {
        _id: "ChatGPT",
        name: "ChatGPT",
        avatar: Logo,
      },
    };

    console.log(message);

    // await adminDb
    //   .collection("users")
    //   .doc(user?.email)
    //   .collection("chats")
    //   .doc(chatId)
    //   .collection("messages")
    //   .add(message);

    res.status(200).json({ text: message.text });
  } catch (error) {
    console.log(error);
  }
}
