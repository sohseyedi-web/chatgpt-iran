import { useRouter } from "next/router";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const NewChat = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const createChat = async () => {
    try {
      const doc = await addDoc(collection(db, "users", user?.email, "chats"), {
        createdAt: serverTimestamp(),
        userId: user?.email,
      });

      router.push(`/chat/${doc?.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pb-4 border-b-[1px] border-solid boder-[#d7d5cd] w-full">
      <button
        onClick={createChat}
        className="w-full h-[40px] rounded-lg  md:text-xl font-normal bg-[#d7d5cd] text-[#000]"
      >
        مکالمه جدید
      </button>
    </div>
  );
};

export default NewChat;
