"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Login = () => {
  const style = {
    container:
      "bg-[#11A37f] h-screen flex flex-col items-center justify-center text-center",

    button:
      "bg-[#21c59c] animate-pulse text-white text-2xl font-bold px-10 py-3 rounded-full mt-10 hover:shadow-xl active:scale-90 transition duration-150",
  };
  return (
    <div className={style.container}>
      <Image
        src="https://links.papareact.com/2i6"
        width={400}
        height={400}
        alt="logo"
      />

      {/* button */}

      <button className={style.button} onClick={() => signIn()}>
        Sign in to use chat gpt
      </button>
    </div>
  );
};

export default Login;
