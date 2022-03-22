import styles from './style.module.css'
import { BsTools } from 'react-icons/bs'


export default function CardServices({ titulo, descricao }) {

    return (
    <div className={styles.containerCard}>
        <div className={styles.imgToll}>
            <div className={styles.circleImgTools}>
                    <BsTools style={{
                        color: { }
                    }}  size={45}  />
            </div>
        </div>
        <div className={styles.titleDescrition}>
             <h1>{titulo}</h1>
             <p>{descricao}</p>
        </div>
     </div>
    )
}