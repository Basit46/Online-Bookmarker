import { useAppContext } from "@/hooks/AppContext";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";

const Bookmark = ({ bookmark }) => {
  const { dispatch } = useAppContext();

  const handleDel = () => {
    dispatch({ type: "DEL", payload: { id: bookmark.id } });
    console.log("done");
  };

  return (
    <div className="bg-emerald-600 w-[500px] p-[10px] flex items-center justify-between mb-[20px]">
      <h1 className="font-bold text-[1.2rem]">
        {bookmark.title.length > 50
          ? bookmark.title.slice(0, 50) + "..."
          : bookmark.title}
      </h1>
      <div className="flex items-center space-x-[20px]">
        <Link
          className="border-black px-2 py-1 border-2"
          href={bookmark.url}
          target="_blank"
        >
          GO TO
        </Link>
        <FaTrash onClick={handleDel} className="text-[red]" />
      </div>
    </div>
  );
};

export default Bookmark;
