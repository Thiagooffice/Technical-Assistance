import styles from './style.module.css';
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react'

export default function ButtonItem({ titulo, descricao }) {

    const [description, setDescription] = useState(false)

    function showDescription() {
        if (description === false) {
            setDescription(true)
        }
        else {
            setDescription(false)
        }
        console.log(description)
    }

    return (
        <div className={`${description ? styles.showNo : styles.showAll} `}>
            <div className={styles.showDescription} onClick={showDescription}>
                <div className={styles.boxIcon}>
                    <IoIosArrowDown />
                </div>
                <p>{titulo}</p>
            </div>
            <div className={`${styles.textDescription} ${description ? styles.textDescriptionOn : styles.textDescriptionOff} `}>
                <span>{descricao}</span>
            </div>
        </div>
    )
}