"use client";
import { signOut, useSession } from "next-auth/react";
import NewChat from "./NewChat";

const Sidebar = () => {
  const style = {
    container: "p-3 h-screen   flex flex-col",
  };

  const { data: session } = useSession();
  console.log(session);
  return (
    <div className={style.container}>
      <div className="flex-1">
        {/* new chat */}
        <NewChat />
        {/* select chat modal */}

        {/* chatList */}
      </div>
      {/* logout */}
      {session && (
        <div className=" center flex-col ">
          <img
            onClick={() => signOut()}
            src={session?.user?.image as string}
            referrerPolicy="no-referrer"
            className="h-12 w-12 rounded-full  mx-auto mb-3  cursor-pointer hover:opacity-50"
          />
          {/* text signout */}
          <p className="text-gray-500">
            sign out as <span className="font-bold">{session?.user?.name}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
