import { useAppContext } from "@/hooks/AppContext";
import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const { darkMode } = useAppContext();
  return (
    <div
      className={`${
        darkMode && "bg-black text-white"
      } h-screen w-screen overflow-x-hidden px-[10px] sm:px-[30px] md:px-[70px] py-[20px]`}
    >
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
