import styles from './style.module.css'

export default function FeedBackClient({ texto, nome }) {
    return (
        <div className={styles.feedBackClient}>
            <div className={styles.dataClient}>
                <div className={styles.textDataClient}>
                    <h2>{nome}</h2>
                    <p>Cliente</p>
                </div>
                <div className={styles.fotoClient}></div>
            </div>
            <div className={styles.topFeedBack}>
                <p>{texto}</p>
            </div>
            
        </div>
    )
}