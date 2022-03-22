import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Monitor from '../assets/monitor.png'
import CardServices from '../components/cardServices'
import ImgCell from '../assets/imgCell.png'


export default function Home() {
  return (
    <>
      <header id='#header' className={styles.header}>
        <div className={styles.containerHeader}>
          <div className={styles.logo}></div>
          <nav className={styles.navBar}>
            <ul className={styles.listaHeader}>
              <li className={styles.itemListHeader}><a className={styles.linkitem} href="header">HOME</a></li>
              <li className={styles.itemListHeader}><a className={styles.linkitem} href="">SERVIÇOS</a></li>
              <li className={styles.itemListHeader}><a className={styles.linkitem} href="">DÚVIDAS</a></li>
              <li className={styles.itemListHeader}><a className={styles.linkitem} href="">REDES SOCIAIS</a></li>
              <li className={styles.itemListHeader}><a className={styles.linkitem} href="">COLETA E ENTREGA</a></li>
              <li className={styles.itemListHeader}><a className={styles.linkitem} href="">SOBRE NÓS</a></li>
              <li className={styles.itemListHeader}><a className={styles.linkitem} href="">CONTATOS</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className={styles.backgroundImage}>
          <h1 className={styles.solutions}>Solução Completa</h1>
          <h1 className={styles.dispositivos}>iPhone, iPad, iMac e Macbook</h1>
          <div className={styles.containerMonitor}>
            <div className={styles.monitor}>
            <Image src={Monitor} alt="Imagem Monitor" quality={100} width={800} height={800} />
            </div>
          </div>
      </div>
      <div className={styles.ourServices}>
        <h1 className={styles.titleOurServices}>Nossos principais serviços</h1>
        <div className={styles.lineOurServices}></div>
        <div className={styles.allCards}>
            <CardServices titulo="Troca de Touch" 
            descricao="Seu smartphone caiu e rachou a tela? Trocamos em 40min, sempre com peças originais."
            />
            <CardServices 
            titulo="Troca de Bateria" 
            descricao="Sua bateria não dura mais o dia inteiro, ou não carrega mais? É hora de substituir. Temos o melhor preço."
            />
            <CardServices
            titulo="Troca Botão Home
            " 
            descricao="Seu botão não corresponde mais aos comandos? está desgastados? Troca em 15min com preço justo, é na Play Consert."
            />
            <CardServices
            titulo="Troca Botão Power" 
            descricao="Parece que desligar o seu smartphone está sendo a pior tarefa? Nós trocamos para você! lembre-se as peças são sempre originais."
            />
            <CardServices
            titulo="Reparo Especializado iPad, iPod" 
            descricao="Troca de touch Screen de iPad/iPod todas as gerações de forma rápida e bem feita. Entrega em tempo record."
            />
            <CardServices
            titulo="Backups de seu Smartphone" 
            descricao="Precisa fazer backup? Deixe que tomamos todas as precauções para salvar seus dados de forma rápida e segura."
            />
        </div>
      </div>

      <div className={styles.infoServices}>
        <div className={styles.leftContainerImgCell}>
          <Image src={ImgCell} alt="Image Cell"  />
        </div>

        <div className={styles.rightContainerButtonsItems}>
          <div className={styles.containerButtonsServices}>
            
          </div>
        </div>

      </div>
    </>
  )
}
