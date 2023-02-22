import Image from "next/image";
import { useState } from "react";
import * as RiIcon from "react-icons/ri";
import Logo from "../../public/logo.svg";
import Sidebar from "./../Sidebar";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full text-white container px-8 flex items-center justify-between">
        <Image src={Logo} width={70} height={70} alt={"chatgpt"} />

        <div
          className="cursor-pointer animate-pulse"
          onClick={() => setShow(!show)}
        >
          <RiIcon.RiFingerprintFill size={32} />
        </div>
      </header>
      <Sidebar show={show} setShow={setShow} />
    </>
  );
};

export default Navbar;
