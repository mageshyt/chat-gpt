import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const style = {
    container: "flex",
    mainContent: "bg-[#343541] flex-1",
  };
  return (
    <html lang="en">
      <head />
      <body>
        <div className={style.container}>
          {/* side bar */}

          {/* client provider - toast */}

          {/* main content */}
          <div className={style.mainContent}>{children}</div>
        </div>
      </body>
    </html>
  );
}
