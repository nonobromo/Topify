import { useState, createContext, useContext } from "react";

const searchContext = createContext({
  search: "",
  searchTrack: () => {},
});

function SearchInput({ children }) {
  const [search, SetSearch] = useState("");

  function searchTrack(e) {
    SetSearch(e.target.value);
  }

  return (
    <searchContext.Provider value={{ search, searchTrack }}>
      {children}
    </searchContext.Provider>
  );
}

export function useSearch() {
  return useContext(searchContext);
}

export default SearchInput;
