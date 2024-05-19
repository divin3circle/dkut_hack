import React from "react";
import { FaCode, FaTelegram, FaWhatsapp } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex justify-between mx-4 my-10">
      <div className="flex gap-1">
        <FaCode color="#42C7E2" size={54} />
        {/* <h1 className="text-white text-2xl font-bold">DeKUT HACK</h1> */}
      </div>
      <div className="flex justify-center gap-4 items-center">
        <div>
          <FaTelegram color="gray" size={34} />
        </div>
        <div>
          <FaWhatsapp color="gray" size={34} />
        </div>
        <div>
          <button className="bg-[#42C7E2] px-4 py-2 text-white text-lg rounded-md ">
            Set reminder
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
