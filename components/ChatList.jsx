import { useEffect, useState } from "react";
import { collection, deleteDoc, doc } from "firebase/firestore";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { db, auth } from "../firebase-config";
import * as RiIcon from "react-icons/ri";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const ChatList = ({ id }) => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState("");
  const [messages] = useCollection(
    collection(db, "users", user?.email, "chats", id, "messages")
  );

  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(id));
  }, [pathname]);

  const removeChat = async () => {
    await deleteDoc(doc(db, "users", user?.email, "chats", id));
    router.push("/");
  };

  return (
    <div
      className={`flex items-center rounded justify-between w-full py-1 my-1 ${
        active && "bg-gray-600"
      }`}
      dir="rtl"
    >
      <Link
        href={`/chat/${id}`}
        className="flex text-white hover:text-gray-400"
      >
        <span>
          <RiIcon.RiChat3Line size={26} />
        </span>
        <p className="text-[1.05rem] font-semibold mr-2 mb-0 truncate w-40">
          {messages?.docs[messages.docs.length - 1]?.data().text || "پیام جدید"}
        </p>
      </Link>
      <span
        onClick={removeChat}
        className="text-red-600 font-semibold cursor-pointer"
      >
        <RiIcon.RiDeleteBin4Fill size={26} />
      </span>
    </div>
  );
};

export default ChatList;
