import { useAppContext } from "@/hooks/AppContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const { darkMode, setDarkMode, clones } = useAppContext();
  const [openMenu, setOpenMenu] = useState(false);

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
      <div className="flex items-center">
        <div
          className={`${
            openMenu ? "left-0" : "left-[100%]"
          } fixed top-0  space-y-[30px] space-x-0 md:space-y-0 h-full bg-white w-full md:w-fit justify-center flex-col md:flex-row md:static flex items-center md:space-x-[30px]`}
        >
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
            } border-2 px-3 py-2 hover:bg-black hover:text-[white] duration-100`}
          >
            BOOKMARKS {"(" + clones?.length + ")"}
          </Link>
        </div>
        <div className="flex items-center space-x-[20px]">
          <FaBars
            onClick={() => setOpenMenu(!openMenu)}
            className="text-[40px] block md:hidden z-[10]"
          />
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
    </div>
  );
};

export default Navbar;
