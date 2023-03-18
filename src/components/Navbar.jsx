import { useAppContext } from "@/hooks/AppContext";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { darkMode, setDarkMode, clones } = useAppContext();

  const handleModeChange = () => {
    setDarkMode((prev) => !prev);
  };

  const handleClick = () => {
    router.push("/");
  };
  return (
    <div className="flex justify-between items-center">
      <h1
        onClick={handleClick}
        className="font-serif text-[2.5rem] cursor-pointer"
      >
        Bookmarker
      </h1>
      <div className="flex">
        <Link
          href="/bookmarker"
          className={`${
            darkMode ? "border-white" : "border-black"
          } border-2 px-3 py-2 hover:bg-black hover:text-[white] duration-100`}
        >
          ADD TO BOOKMARKS
        </Link>
        <Link
          href="/display"
          className={`${
            darkMode ? "border-white" : "border-black"
          } border-2 px-3 py-2 hover:bg-black hover:text-[white] duration-100 ml-[30px]`}
        >
          BOOKMARKS {"(" + clones?.length + ")"}
        </Link>
        <div
          onClick={handleModeChange}
          className={`${
            darkMode ? "border-white" : "border-black"
          } w-[50px] h-[50px] border-2 rounded-full ml-[50px] overflow-hidden cursor-pointer bg-white`}
        >
          <div className="w-1/2 h-full bg-black"></div>
          <div className="w-1/2 h-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
