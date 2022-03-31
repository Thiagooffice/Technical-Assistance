import styles from './style.module.css'

export default function DataItem({ numero, subtitulo }) {

    return (
        <div className={styles.containerData}>
            <div className={styles.datas}>
                <h3> {numero} </h3>
                <p> {subtitulo} </p>
            </div>
        </div>
    )
}