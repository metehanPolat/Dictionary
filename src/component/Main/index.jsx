import React, { useState } from 'react'
import './straight.css'
import styles from "./style.module.css"
import { useDictionary } from '../../context/DictionaryContext'

function MainText() {

  const {dictionary,setDictionary} = useDictionary()

  return (
    <div>
      <div className={styles.nounHeadDiv}>
        <h2 className={styles.h2}>noun</h2> <span className="w-full h-[1px] bg-[#3a3a3a] "></span>
      </div>
      <div>
        <p>Meaning</p>
        <ul>
          {
              dictionary.data && dictionary.data[0].meanings[0].definitions.map((noun,index) => (
              <li key={index} className={styles.ulNoun}>{noun.definition}</li>
              ))
          }
        </ul>
      </div>
      <div className={styles.nounHeadDiv}>
        <h2 className={styles.h2}>verb</h2> <span className="w-full h-[1px] bg-[#3a3a3a] "></span>
      </div>

      <div>
        <p>Meaning</p>
        <ul>
          {
              dictionary.data && dictionary.data[0].meanings[1].definitions.map((noun,index) => (
              <li key={index} className={styles.ulNoun}>{noun.definition}</li>
              ))
          }
        </ul>
      </div>
      <div className={styles.nounHeadDiv}>
        <span className="w-full h-[1px] bg-[#3a3a3a] "></span>
      </div>
      <div className={styles.lastDiv}>
        <p>Source</p> <a href={dictionary.data && dictionary.data[0].sourceUrls[0]} target="_blank">
            {
              dictionary.data && dictionary.data[0].sourceUrls[0]
          }
        </a>
      </div>
    </div>
  )
}

export default MainText
