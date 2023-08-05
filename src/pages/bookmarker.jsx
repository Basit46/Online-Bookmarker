// Import necessary modules and hooks
import { useAppContext } from "@/hooks/AppContext"; // Import custom hook to access app context
import shortUrl from "@/utils/shortUrl"; // Import the function for shortening URLs
import { useRouter } from "next/router"; // Import Next.js router for navigation
import { useState } from "react"; // Import React's useState hook for managing state

const bookmarker = () => {
  // Get the router and app context using custom hooks
  const router = useRouter();
  const { darkMode, dispatch } = useAppContext();

  // State to store input values for title and URL
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if both title and URL are provided
    if (title === "" || url === "") {
      alert("Enter appropriate values");
      return;
    }

    // Call the shortUrl function to shorten the URL
    const resultUrl = await shortUrl(url);

    // Check if shortening was successful
    if (resultUrl) {
      // Dispatch an action to add the bookmark to the app context state
      dispatch({ type: "ADD", payload: { title, url: resultUrl } });

      // Show success message and navigate to the display page
      alert("Successfully Added");
      router.push("/display");
    } else {
      // If shortening failed, show an error message
      alert("Error, Try again later");
    }
  };

  // JSX for the bookmarker component
  return (
    <div className="w-full flex justify-center pt-[100px]">
      <form
        onSubmit={handleSubmit}
        className={`${
          darkMode ? "border-white" : "border-black"
        } h-fit w-full md:w-fit border-2 p-[20px] rounded-[10px]`}
      >
        {/* Input field for the title */}
        <input
          className="w-full md:w-[500px]"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Add the Title"
        />
        {/* Input field for the URL */}
        <input
          className="w-full md:w-[500px] mt-[20px] mb-[40px]"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="text"
          placeholder="Add the URL"
        />
        {/* Button to submit the form */}
        <button className="w-full bg-[green] py-[10px] text-[2rem] text-white font-bold">
          ADD
        </button>
      </form>
    </div>
  );
};

export default bookmarker;
