import { useRouter } from "next/router";
import Container from './../../../components/container/Container';
import Chats from './../../../components/chatbox/Chats';
import ChatInput from './../../../components/chatbox/ChatInput';

const Chatpage = () => {
  const router = useRouter();
  const { query } = router;

  return (
    <Container>
      <section className="flex flex-col h-screen overflow-hidden max-w-4xl mx-auto">
        <ChatInput chatId={query.id} />
        <Chats chatId={query.id} />
      </section>
    </Container>
  );
};

export default Chatpage;
