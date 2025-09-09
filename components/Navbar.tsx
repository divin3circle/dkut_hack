import React from "react";
import { FaCode, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import mlsa from "../app/logos/mlsa.png";
import Image from "next/image";
import nav from "../app/logos/nav.png";

function Navbar() {
  return (
    <div className="flex justify-between mx-4 my-10">
      <div className="flex gap-1 ">
        <Image src={nav} alt="logo" width={150} height={50} />
        {/* <h1 className="text-white text-2xl font-bold">DeKUT HACK</h1> */}
      </div>
      <div className="flex justify-center gap-4 items-center">
        <a className="" href="https://twitter.com/mlsa_dekut" target="_blank">
          <FaTwitter color="gray" size={34} />
        </a>
        <a
          className=""
          href="https://chat.whatsapp.com/CDVpW3ICEFSJEFP81rXyIb"
          target="_blank"
        >
          <FaWhatsapp color="gray" size={34} />
        </a>
        <a
          href="https://forms.cloud.microsoft/r/L2W0LiYqcP"
          target="_blank"
        >
          <button className="bg-[#42C7E2] px-8 py-2 text-white text-lg rounded-md ">
            Join
          </button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
