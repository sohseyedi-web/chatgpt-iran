import Image from "next/image";
import { signInWithPopup } from "firebase/auth";
import { provider, auth } from "../firebase-config";
import Logo from "../public/logo.svg";
import * as RiIcon from "react-icons/ri";

const Auth = () => {
  const signinWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex items-center justify-center flex-col h-screen bg-[#4da583]">
      <Image src={Logo} width={200} height={200} alt={"chatgpt"} />
      <h3 className="text-3xl font-semibold mb-4 text-white">
        Chat GPT for Iranian
      </h3>
      <button
        onClick={signinWithGoogle}
        className="w-[170px] h-[40px] bg-[#252525] rounded-lg border-none text-white transition-all duration-300 hover:scale-110 hover:duration-300"
      >
        ورود به ربات
      </button>
      <div className="absolute bottom-2 max-w-2xl flex items-center justify-center">
        <a
          href="https://www.linkedin.com/in/sohseyedi"
          target={"_blank"}
          className="text-3xl text-[#232323] transition-all duration-200 hover:duration-200 hover:transition-all hover:text-[#d7d5cd]"
        >
          <RiIcon.RiLinkedinLine />
        </a>
        <a
          href="https://github.com/sohseyedi-web/chatgpt-iran"
          target={"_blank"}
          className="mx-4 text-3xl text-[#232323] transition-all duration-200 hover:duration-200 hover:transition-all hover:text-[#d7d5cd]"
        >
          <RiIcon.RiGithubLine />
        </a>
        <a
          href="/"
          target={"_blank"}
          className="text-3xl text-[#232323] transition-all duration-200 hover:duration-200 hover:transition-all hover:text-[#d7d5cd]"
        >
          <RiIcon.RiTwitterLine />
        </a>
      </div>
    </section>
  );
};

export default Auth;
