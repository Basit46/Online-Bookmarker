import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const appContext = createContext();
const initialState = [
  { id: 1, title: "How To NUll", url: "https://twitter.com" },
];

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
const AppContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("bookmarks"))) {
      dispatch({
        type: "EFFECT",
        payload: JSON.parse(localStorage.getItem("bookmarks")),
      });
    }
  }, []);

  const [bookmarks, dispatch] = useReducer(reducer, initialState);
  const [clones, SetClones] = useState(bookmarks);

  useEffect(() => {
    console.log(bookmarks, initialState);
    if (bookmarks !== initialState) {
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
  }, [bookmarks]);

  useEffect(() => {
    SetClones(bookmarks);
  }, [bookmarks]);

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
  return (
    <appContext.Provider
      value={{ darkMode, setDarkMode, clones, dispatch, filterSearch }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppContext;

export const useAppContext = () => {
  return useContext(appContext);
};
