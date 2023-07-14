import Image from "next/image";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="w-full h-20 bg-gradient-to-r from-teal-900 via-zinc-900 to-teal-900 text-gray-300 flex items-center justify-center gap-4">
      <Image className="w-24" src={logo} alt="logo" />
      <p className="text-sm -mt-0">
        All rights reserved{" "}
        <a
          className="hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300"
          //href="https://reactbd.co"
          //target="_blank"
        >
          @rohandeb
        </a>
      </p>
    </div>
  );
};

export default Footer;
