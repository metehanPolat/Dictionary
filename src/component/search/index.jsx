import React from 'react'
import styles from "./style.module.css"
import { useEffect } from 'react'
import axios from 'axios'
import { useSearch } from '../../context/SearchContext'
import { useDictionary } from '../../context/DictionaryContext'
import { useState } from 'react'
import '../navbar/button.css'
import { useTheme } from '../../context/Theme.jsx'

function Search() {

  const {search,setSearch} = useSearch()
  const {dictionary,setDictionary} = useDictionary()
  const {theme,setTheme} = useTheme()

  useEffect(() => {
    axios(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((data) => setDictionary(data))
  }, [search])

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    // Yeni input değerini state'e güncelle
    setInputValue(event.target.value);
  };

  // Butona tıklandığında bu fonksiyon çalışacak
  const handleButtonClick = () => {
    // Şu anda input değeri state'te bulunuyor, istediğin gibi kullanabilirsin
    setSearch(inputValue)
    // İstersen başka bir şey yapabilirsin.
  };
  
  return (
    <div className={styles.searchDiv}>
      <input className={theme.modeDark ? `${styles.inputSearch}`:`${styles.inputLightMode}  ${styles.inputSearch}`} type="text" placeholder="Search.." name="search" onChange={handleInputChange} />
      <button className={styles.searchButton}>
        <span className="material-symbols-outlined" onClick={handleButtonClick}>search</span>
      </button>
    </div>
  )
}

export default Search
