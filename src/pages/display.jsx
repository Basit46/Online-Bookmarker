import Bookmark from "@/components/Bookmark";
import { useAppContext } from "@/hooks/AppContext";
import { useRouter } from "next/router";
import React, { useState } from "react";

const display = () => {
  const router = useRouter();
  const { clones, darkMode, filterSearch } = useAppContext();
  const [searchVal, setSearchVal] = useState();

  const navToBookmarker = () => {
    router.push("/bookmarker");
  };

  const handleChange = () => {
    filterSearch(searchVal);
  };
  return (
    <div className="w-full flex justify-center pt-[50px]">
      <div className="h-fit w-full md:w-fit p-0 sm:p-[20px]">
        <input
          className="w-full md:w-[500px] outline-none mb-[10px]"
          type="search"
          placeholder="Search Bookmark"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          onKeyUp={handleChange}
        />
        <button
          onClick={navToBookmarker}
          className={`${
            darkMode ? "border-white" : "border-black"
          } border-2 px-3 py-1 mb-[20px]`}
          target="_blank"
        >
          ADD NEW ITEM
        </button>

        <div
          className={`${
            darkMode ? "border-white" : "border-black"
          } pt-[20px] border-t-2`}
        >
          {clones &&
            clones.map((bookmark, index) => (
              <Bookmark key={index} bookmark={bookmark} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default display;
