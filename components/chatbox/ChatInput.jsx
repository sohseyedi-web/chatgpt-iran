import { useState } from "react";
import * as RiIcon from "react-icons/ri";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "react-hot-toast";



const ChatInput = ({ chatId }) => {
  const [user] = useAuthState(auth);
  const [prompt, setPrompt] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const input = prompt.trim();
    if (!input || input === "") return;
    setPrompt("");

    const message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: user?.email,
        name: user?.displayName,
        avatar: user?.photoURL,
      },
    };

    // add propmt to database
    await addDoc(
      collection(db, "users", user?.email, "chats", chatId, "messages"),
      message
    );

    const notif = toast.loading("در حال بررسی");

    // send propmt to api and get response
    await fetch("/api/apiQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json ",
      },
      body: JSON.stringify({
        prompt: input,
        user,
        chatId,
      }),
    })
      .then(() => {
        toast.success("جواب ارسال شد", {
          id: notif,
        });
      })
      .catch((err) => console.log(`errr ${err.message}`));
  };

  return (
    <div className={"mt-20 w-full relative"}>
      <form className={" bg-white rounded-lg relative"}>
        <input
          type="text"
          placeholder={"..."}
          className="w-full rounded-lg p-1 text-xl  border-none outline-none  font-medium"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          onClick={sendMessage}
          className="bg-[#4da583] absolute content-none  text-white w-28 right-1 rounded-lg top-[18%] h-2/3 flex items-center justify-center"
        >
          <RiIcon.RiSendPlaneLine size={23} />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
