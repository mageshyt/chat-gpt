import NewChat from "./NewChat";

const Sidebar = () => {
  const style = {
    container: "p-3    flex flex-col",
  };
  return (
    <div className={style.container}>
      <div className="flex-1">
        {/* new chat */}
        <NewChat />
        {/* select chat modal */}

        {/* chatList */}
      </div>
    </div>
  );
};

export default Sidebar;
