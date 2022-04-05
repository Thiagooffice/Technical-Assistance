import styles from './style.module.css';
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react'

export default function ButtonItem({ titulo, descricao }) {

    const [description, setDescription] = useState(false)

    function showDescription() {
        setDescription(!description)
    }

    return (
        <div className={`${description ? styles.showAll : styles.showNo} `}>
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