import { createContext, useContext } from "react";
import { useState } from "react";

const SearchContext = createContext()

export const SearchProvider = ({children}) => {
    const [search,setSearch] = useState("example")

    const values = {search,setSearch}
    
    return <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
}

export const useSearch = () => useContext(SearchContext)