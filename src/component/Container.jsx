import React from 'react'
import Navbar from './navbar'
import './Container.css'
import Search from './search'
import Header from './Head'
import MainText from './Main'
import { useSearch } from '../context/SearchContext'
import { useEffect } from 'react'
import axios from 'axios'
import { useDictionary } from '../context/DictionaryContext'
import './TextStyle.css'

function Container() {

  const { search, setSearch } = useSearch()
  const { dictionary, setDictionary } = useDictionary()


  useEffect(() => {
    axios(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((data) => setDictionary(data))
  }, [])

  const styleText = localStorage.getItem('textStyle');
  return (
    <div className={styleText === 'sans-serif' ? 'sans-serif containerDiv' : styleText === 'serif' ? 'serif containerDiv' : 'Mono containerDiv'}>  {/* bu sadece açıldığında çözer */}
        <Navbar />
        <Search />
        <Header />
        <MainText />
    </div>

  )
}

export default Container
