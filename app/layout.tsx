import Sidebar from "../components/Sidebar/Sidebar";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const style = {
    container: "flex",
    mainContent: "bg-[#343541] flex-1",
    sideBarContainer: " md:w-[18rem]    h-screen bg-[#202123] overflow-y-auto",
  };
  return (
    <html lang="en">
      <head />
      <body>
        <div className={style.container}>
          <div className={style.sideBarContainer}>
            {/* side bar */}
            <Sidebar />
          </div>

          {/* client provider - toast */}

          {/* main content */}
          <div className={style.mainContent}>{children}</div>
        </div>
      </body>
    </html>
  );
}
