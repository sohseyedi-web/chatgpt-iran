import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase-config";
import Messages from "./Messages";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import * as RiIcon from "react-icons/ri";

const Chats = ({ chatId }) => {
  const [user] = useAuthState(auth);
  const [messages] = useCollection(
    user &&
      query(
        collection(db, "users", user?.email, "chats", chatId, "messages"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="flex-1  rounded-l overflow-y-auto overflow-x-hidden">
      {messages?.empty && (
        <div className="pt-5">
          <p className="text-center text-white font-medium">
            برای شروع لطفا یک پیام بفرستید
          </p>
          <div className="h-8 w-8 mt-5 mx-auto text-white animate-bounce">
            <RiIcon.RiArrowDownCircleLine size={23} />
          </div>
        </div>
      )}
      {messages?.docs.map((msg) => (
        <Messages key={msg.id} message={msg.data()} />
      ))}
    </div>
  );
};

export default Chats;
