import React from 'react'
import styles from "./style.module.css"
import { useState } from 'react'
import { useDictionary } from '../../context/DictionaryContext';

function Header() {


  const togglePlay = () => {
    
    const audioElement = document.getElementById('myAudio');
    audioElement.play();
    
  };

  const {dictionary,setDictionary} = useDictionary()

  return (
    <div className={styles.mainDiv}>
      <div className={styles.leftDiv}> {/* yazı */}
        <div>
            <p className={styles.searchWord}>{dictionary.data && dictionary.data[0].word}</p>
        </div>
        <div className={styles.headerTextDiv}>
            <p className={styles.searchWordDescription}>{dictionary.data && dictionary.data[0].phonetics[0].text}</p>
        </div>
      </div>

      <div> {/* ses */}
        <button className={styles.soundButton} onClick={togglePlay} >
          <span className={`material-symbols-outlined ${styles.icon}`}>play_circle</span>
        </button>
        <audio id="myAudio" src={dictionary.data && dictionary.data[0].phonetics[dictionary.data && dictionary.data[0].phonetics.length - 1].audio} />
        

      </div>
    </div>
  )
}

export default Header
