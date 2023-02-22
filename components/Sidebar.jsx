import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase-config";
import { signOut } from "firebase/auth";
import NewChat from "./NewChat";
import Back from "./Back";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import ChatList from './ChatList';

const Sidebar = ({ show, setShow }) => {
  const [user] = useAuthState(auth);
  const [chat] = useCollection(
    user &&
    query(
      collection(db, "users", user?.email, "chats"),
      orderBy("createdAt", "desc")
    )
  );
  const signoutUser = async () => {
    await signOut(auth);
  };

  return (
    <>
      <Back open={show} setOpen={setShow} />
      <aside
        className={`${show ? "right-0" : "-right-full"
          } fixed  top-0 w-[280px] h-screen bg-[#252525] transition-all duration-200 z-50 text-white`}
      >
        <div className="flex items-center justify-center flex-col w-full px-6 py-4">
          {/* New Chat */}
          <NewChat />
          {/* chat list */}
          {chat?.docs.map((item) => (
            <ChatList key={item.id} id={item.id} />
          ))}
          {/* user Profile */}
          <div className="absolute bottom-2" onClick={signoutUser}>
            <img
              src={user?.photoURL}
              className="rounded-full w-[40px] h-[40px]"
              alt={user?.displayName}
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
