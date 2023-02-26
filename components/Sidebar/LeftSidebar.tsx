"use client";

import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Sidebar from "./Sidebar";
const LeftSidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const style = {
    Icon: "absolute left-2 sm:hidden   w-[45px] h-[45px]  top-2 p-2 cursor-pointer bg-[#21c59c]  rounded-md  ",

    mobileSidebar:
      "sm:hidden scrollbar-hide h-screen overflow-y-auto absolute z-50 ",

    closeIcon:
      "w-[45px] h-[45px] center p-2 cursor-pointer bg-[#21c59c]  rounded-md ",
  };
  return (
    <div className="  overflow-hidden  bg-[#202123]">
      <div className={style.Icon + `${isOpen ? "hidden" : "block "}`}>
        <GiHamburgerMenu
          onClick={() => setIsOpen(!isOpen)}
          className={` text-3xl text-white`}
        />
      </div>
      <div className=" hidden sm:block   lg:w-[18rem] w-[14rem]    ">
        <Sidebar />
      </div>

      <div className={style.mobileSidebar + `${isOpen && " w-[18rem]"}`}>
        {isOpen && (
          <div className="p-2 space-y-4 flex flex-col">
            {/* close */}
            <div className=" flex items-end  justify-end mr-2">
              <div className={style.closeIcon}>
                <AiOutlineClose
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-3xl text-white"
                />
              </div>
            </div>

            <div>
              <Sidebar />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftSidebar;
