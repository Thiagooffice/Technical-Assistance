import styles from './style.module.css'
import { BiWrench } from 'react-icons/bi'


export default function CardServices({ titulo, descricao }) {

    return (
    <div className={styles.containerCard}>
        <div className={styles.imgToll}>
                    <BiWrench />
        </div>
        <div className={styles.titleDescription}>
             <h1>{titulo}</h1>
             <p>{descricao}</p>
        </div>
     </div>
    )
}