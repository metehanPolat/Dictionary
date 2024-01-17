import React from 'react'
import styles from "./style.module.css"
import { useState } from 'react';
import './button.css'
import { useTheme } from '../../context/Theme';
import { useEffect } from 'react';

function Navbar() {

    const { theme, setTheme } = useTheme()


    const [isVisible, setIsVisible] = useState(false)
    const [selectedValue, setSelectedValue] = useState('sans-serif')

    const options = ["sans-serif", "serif", "monospace"]
    const [textStyle,setTextStyle] = useState("sans-serif")


    const openOptions = () => {
        setIsVisible(!isVisible);
    };  

    const selectOption = (option) => {
        
        setTheme({...theme, fontFamily : option})

        setSelectedValue(option);
        setIsVisible(false);
        setTextStyle(option);
        setTextSelect(option)

        localStorage.setItem('textStyle', option);
    };

    // localde değer yoksa herhangi birşey atama yap !!!!!!!!!!!!!!!!!!!!!!!
    const [textSelect, setTextSelect] = useState(localStorage.getItem('textStyle'))

    console.log(theme.modeDark);

    return (
        <div className={styles.navbar}>
            <div>
                <span className={"material-symbols-outlined " + styles.materialSymbolSoutlined}>book_2</span>
            </div>

            <div className={styles.rightDiv}>

                <div onClick={openOptions} className={styles.mainDivForSelect}>
                    <div className={styles.divSelect}>
                        <div style={{fontFamily:textSelect}} className={styles.divSelectName}> {/* select */}
                            {textSelect}
                        </div>

                        <div> {/* İcon */}
                            <span className={`material-symbols-outlined ${styles.iconArrow}`} >keyboard_arrow_down</span>
                        </div>
                    </div>

                    {
                        isVisible && (
                            <div className={styles.divOptions}>
                                {
                                    options.map((option, index) => (
                                        <div key={index} onClick={() => selectOption(option)} className={styles.divOptionsItems}>
                                            {option}
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                    <input type="hidden" id="selectedValue" name="Selected" value={selectedValue} />



                </div>


                {/* <button>Aç/Kapa</button>
                <span className={"material-symbols-outlined " + styles.materialSymbolSoutlined}>dark_mode</span> */}

                {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}

                <svg display="none">
                    <symbol id="light" viewBox="0 0 24 24">
                        <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <line x1="12" y1="17" x2="12" y2="20" transform="rotate(0,12,12)" />
                            <line x1="12" y1="17" x2="12" y2="20" transform="rotate(45,12,12)" />
                            <line x1="12" y1="17" x2="12" y2="20" transform="rotate(90,12,12)" />
                            <line x1="12" y1="17" x2="12" y2="20" transform="rotate(135,12,12)" />
                            <line x1="12" y1="17" x2="12" y2="20" transform="rotate(180,12,12)" />
                            <line x1="12" y1="17" x2="12" y2="20" transform="rotate(225,12,12)" />
                            <line x1="12" y1="17" x2="12" y2="20" transform="rotate(270,12,12)" />
                            <line x1="12" y1="17" x2="12" y2="20" transform="rotate(315,12,12)" />
                        </g>
                        <circle fill="currentColor" cx="12" cy="12" r="5" />
                    </symbol>
                    <symbol id="dark" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M15.1,14.9c-3-0.5-5.5-3-6-6C8.8,7.1,9.1,5.4,9.9,4c0.4-0.8-0.4-1.7-1.2-1.4C4.6,4,1.8,7.9,2,12.5c0.2,5.1,4.4,9.3,9.5,9.5c4.5,0.2,8.5-2.6,9.9-6.6c0.3-0.8-0.6-1.7-1.4-1.2C18.6,14.9,16.9,15.2,15.1,14.9z" />
                    </symbol>
                </svg>
                <label className="switch"> {/* theme.modeDark === "true" */}
                    <input className="switch__input"  checked={theme.modeDark} type="checkbox" role="switch" name="dark" onClick={() => {
                        setTheme({...theme, modeDark : !theme.modeDark})
                        localStorage.setItem('localDarkMode', !theme.modeDark)
                    }} /> {/* değişimin nedeni */}
                    <svg className="switch__icon" width="24px" height="24px" aria-hidden="true">
                        <use href="#light" /> {/* bu içerileri kontrolle yazabilirim */}
                    </svg>
                    <svg className="switch__icon" width="24px" height="24px" aria-hidden="true">
                        <use href="#dark" />
                    </svg>
                    <span className="switch__inner"></span>
                    <span className="switch__inner-icons"> {/* bu kısım tıkranıldığında çıkan kısım */}
                        <svg className="switch__icon" width="24px" height="24px" aria-hidden="true">
                            <use href="#light" />
                        </svg>
                        <svg className="switch__icon" width="24px" height="24px" aria-hidden="true">
                            <use href="#dark" />
                        </svg>
                    </span>
                    <span className="switch__sr">Dark Mode</span>
                </label>

                {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
            </div>
        </div>
    )
}

export default Navbar
