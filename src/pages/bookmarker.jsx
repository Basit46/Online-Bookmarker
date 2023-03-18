import { useAppContext } from "@/hooks/AppContext";
import { useRouter } from "next/router";
import { useState } from "react";

const bookmarker = () => {
  const router = useRouter();
  const { darkMode, dispatch } = useAppContext();

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "" || url === "") {
      alert("Enter appropriate values");
      return;
    }

    dispatch({ type: "ADD", payload: { title, url } });
    alert("Successfully Added");
    router.push("/display");
  };

  return (
    <div className="w-full flex justify-center pt-[100px]">
      <form
        onSubmit={handleSubmit}
        className={`${
          darkMode ? "border-white" : "border-black"
        } h-fit w-full md:w-fit border-2 p-[20px] rounded-[10px]`}
      >
        <input
          className="w-full md:w-[500px]"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Add the Title"
        />
        <input
          className="w-full md:w-[500px] mt-[20px] mb-[40px]"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="text"
          placeholder="Add the URL"
        />
        <button className="w-full bg-[green] py-[10px] text-[2rem] text-white font-bold">
          ADD
        </button>
      </form>
    </div>
  );
};

export default bookmarker;
