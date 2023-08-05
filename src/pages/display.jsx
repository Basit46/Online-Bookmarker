import Bookmark from "@/components/Bookmark";
import { useAppContext } from "@/hooks/AppContext";
import { useRouter } from "next/router";
import React, { useState } from "react";

const display = () => {
  // Get the router and app context using custom hooks
  const router = useRouter();
  const { clones, darkMode, filterSearch } = useAppContext();

  // State to store the search input value
  const [searchVal, setSearchVal] = useState();

  // Function to navigate to the "bookmarker" page
  const navToBookmarker = () => {
    router.push("/bookmarker");
  };

  // Function to handle search input change and trigger bookmark filtering
  const handleChange = () => {
    filterSearch(searchVal);
  };

  // JSX for the "display" component
  return (
    <div className="w-full flex justify-center pt-[50px]">
      <div className="h-fit w-full md:w-fit p-0 sm:p-[20px]">
        {/* Search input field */}
        <input
          className="w-full md:w-[500px] outline-none mb-[10px]"
          type="search"
          placeholder="Search Bookmark"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          onKeyUp={handleChange} // Call handleChange on keyup to trigger filtering
        />
        {/* Button to navigate to the "bookmarker" page */}
        <button
          onClick={navToBookmarker}
          className={`${
            darkMode ? "border-white" : "border-black"
          } border-2 px-3 py-1 mb-[20px]`}
          target="_blank"
        >
          ADD NEW ITEM
        </button>

        {/* Container for displaying bookmarks */}
        <div
          className={`${
            darkMode ? "border-white" : "border-black"
          } pt-[20px] border-t-2`}
        >
          {/* Iterate through "clones" array and render Bookmark component */}
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
