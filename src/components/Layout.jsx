import { useAppContext } from "@/hooks/AppContext";
import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const { darkMode } = useAppContext();
  return (
    <div
      className={`${
        darkMode && "bg-black text-white"
      } h-screen w-screen overflow-hidden px-[70px] py-[20px]`}
    >
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
