import { useRouter } from "next/router";
import Container from "./../../../components/container/Container";
import Chats from "./../../../components/chatbox/Chats";
import ChatInput from "./../../../components/chatbox/ChatInput";

const Chatpage = () => {
  const router = useRouter();
  const { query } = router;

  return (
    <Container>
      <section className="flex flex-col h-screen overflow-hidden md:w-[50%] w-[95%] mx-auto">
        <ChatInput chatId={query.id} />
        <Chats chatId={query.id} />
      </section>
    </Container>
  );
};

export default Chatpage;
