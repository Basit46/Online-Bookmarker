import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

// Create a new context
const appContext = createContext();

// Initial state for bookmarks
const initialState = [
  { id: 1, title: "How To NUll", url: "https://twitter.com" },
];

// Reducer function to manage state changes
const reducer = (state, action) => {
  switch (action.type) {
    case "EFFECT":
      return action.payload;
    case "ADD":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 1000000),
          title: action.payload.title,
          url: action.payload.url,
        },
      ];
    case "DEL":
      return state.filter((bookmark) => bookmark.id !== action.payload.id);
    default:
      return;
  }
};

// AppContext component wraps the application with the context
const AppContext = ({ children }) => {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Load bookmarks from local storage on initial render
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("bookmarks"))) {
      dispatch({
        type: "EFFECT",
        payload: JSON.parse(localStorage.getItem("bookmarks")),
      });
    }
  }, []);

  // Use the reducer to manage state changes for bookmarks
  const [bookmarks, dispatch] = useReducer(reducer, initialState);

  // State to store a filtered clone of bookmarks for searching
  const [clones, SetClones] = useState(bookmarks);

  // Save bookmarks to local storage whenever they change
  useEffect(() => {
    if (bookmarks !== initialState) {
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
  }, [bookmarks]);

  // Update the clones state whenever bookmarks change to reflect the current state for searching
  useEffect(() => {
    SetClones(bookmarks);
  }, [bookmarks]);

  // Function to filter bookmarks based on the search value
  const filterSearch = (value) => {
    if (value === "") {
      SetClones(bookmarks);
    }
    SetClones(
      bookmarks.filter((bookmark) =>
        bookmark.title.toLowerCase().includes(value.toLowerCase().trim())
      )
    );
  };

  // Provide the context values to the wrapped components
  return (
    <appContext.Provider
      value={{ darkMode, setDarkMode, clones, dispatch, filterSearch }}
    >
      {children}
    </appContext.Provider>
  );
};

// Export the AppContext component as the default export
export default AppContext;

// Custom hook to consume the app context
export const useAppContext = () => {
  return useContext(appContext);
};
