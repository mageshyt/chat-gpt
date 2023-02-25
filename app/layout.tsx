import { getServerSession } from "next-auth";
import Login from "../components/Login/Login";
import { SessionProvider } from "../components/Provider/SessionProvider";
import Sidebar from "../components/Sidebar/Sidebar";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import "../styles/globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const style = {
    container: "flex",
    mainContent: "bg-[#343541] flex-1",
    sideBarContainer: " md:w-[18rem]    h-screen bg-[#202123] overflow-y-auto",
  };

  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <head />
      <body>
        <SessionProvider session={session}>
          {/* if no session login */}
          {!session ? (
            <Login />
          ) : (
            <div className={style.container}>
              <div className={style.sideBarContainer}>
                {/* side bar */}
                <Sidebar />
              </div>

              {/* client provider - toast */}

              {/* main content */}
              <div className={style.mainContent}>{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
