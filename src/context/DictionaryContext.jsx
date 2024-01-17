import { createContext, useContext } from "react";
import { useState } from "react";

const DictionaryContext = createContext()

export const DictionaryProvider = ({children}) => {

    const [dictionary, setDictionary] = useState([])

    const values = {dictionary, setDictionary}

    return <DictionaryContext.Provider value={values}>{children}</DictionaryContext.Provider>
}

export const useDictionary = () => useContext(DictionaryContext)