import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Monitor from '../assets/monitor.png'
import CardServices from '../components/cardServices'
import ImgCell from '../assets/imgCell.png'
import ImgIphones from '../assets/iphones.jpg'
import ButtonItem from '../components/buttonItem'
import DataItem from '../components/dataItem'
import FeedBackClient from '../components/feedBackClient'
import fotoContato from '../assets/fotoContato.svg'
import email from '../assets/email.svg'
import fotoHome from '../assets/fotoHome.svg'
import capaHome from '../assets/capaHome.jpg'

import { IoIosArrowBack, IoIosArrowForward, IoIosPhonePortrait, IoMdMail, IoMdMap, IoIosMenu } from 'react-icons/io'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import React, { useRef, useState } from 'react';

export default function Home() {

  const [hamburguer, setHamburguer] = useState(false)



  const responsive = {
    desktop: {
      breakpoint: { max: 2500, min: 1024 },
      items: 3,
      slidesToSlide: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const feedbacks = useRef()

  function nextClick(event) {
    event.preventDefault();
    feedbacks.current.scrollLeft += feedbacks.current.offsetWidth
  }

  function backClick(event) {
    event.preventDefault();
    feedbacks.current.scrollLeft -= feedbacks.current.offsetWidth
  }

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
          <div className={styles.menuHamburguer} onClick={() => setHamburguer(!hamburguer)}>
            <IoIosMenu />
            {hamburguer && (
              <nav className={styles.navHamburguer}>
                <ul className={styles.listaHamburguer}>
                  <li><a>HOME</a></li>
                  <li><a>SERVIÇOS</a></li>
                  <li><a>DÚVIDAS</a></li>
                  <li><a>REDES SOCIAIS</a></li>
                  <li><a>COLETA E ENTREGA</a></li>
                  <li><a>SOBRE NÓS</a></li>
                  <li><a>CONTATOS</a></li>
                </ul>
              </nav>)}
          </div>
        </div>
      </header>

      <div className={styles.backgroundHome}>
        <div className={styles.opacityBackground}></div>
        <div className={styles.flexHome}>
          <div className={styles.titleHome}>
            <h1>Solução Completa</h1>
            <h3>iPhone, iPad, iMac e Macbook</h3>
          </div>
          <div className={styles.fotoHome}>
            <Image src={fotoHome} width={300} />
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

      <div className={styles.sectionCarousel}>
        <div className={styles.boxCarouselMain}>
          <Carousel responsive={responsive}
            partialVisible={true}
            autoplay={true}
            className="containerCarousel" >
            <div>
              <Image src={ImgIphones} />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <Image src={ImgIphones} />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <Image src={ImgIphones} />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
      </div>

      <div className={styles.infoServices}>

        <div className={styles.leftContainerImgCell}>
          <Image src={ImgCell} alt="Image Cell" />
        </div>

        <div className={styles.rightContainerButtonsItems}>
          <div className={styles.containerButtonsServices}>
            <ButtonItem titulo="Quanto tempo leva o reparo?"
              descricao="Em média os procedimentos duram 40 min, porém vai depender da demanda que a loja esteja no momento. Mas para garantir o tempo indicado, agende o seu dia de reparo e tenha a comodidade e tempo de reparo garantido. Você poderá agendar via WhatsApp."
            />
            <ButtonItem titulo="Quanto tempo tenho de garantia?"
              descricao="A garantia para todo reparo realizado conosco é de 90 dias, no entando, não precisa se preocupar com problemas ocorridos após o fim da garantia, pois temos um relacionamento amigável e sempre resolvemos tudo da melhor maneira possível."
            />
            <ButtonItem titulo="A play consert é segura?"
              descricao="Sim! completamente segura. Temos profissionais altamente qualificados e certificados em umas das melhores escolas de software e hardware autorizada da apple. Desta forma sempre procedemos com diagnósticos precisos e corretos."
            />
            <ButtonItem titulo="Vocês coletam e entram?"
              descricao="Sim, possuímos um serviço de leva e trás para todos os clientes residente em Salvador e Lauro de Freitas. Consulte a taxa de coleta e entrega da sua região."
            />
            <ButtonItem titulo="Vocês trabalham com outras marcas?"
              descricao="Com certeza. Além de toda linha apple, dispomos de conhecimentos sólidos em marcas atuais como: LG, SAMSUNG, MOTOROLA, SONY, NOKIA(MICROSOFT). Realizamos trocas de touch, bateria e quaisquer problemas que ele venha a ter."
            />
          </div>
        </div>
      </div>

      <div className={styles.containerInformationRepairs}>
        <div className={styles.imgWrapper}>
          <div className={styles.boxImgWrapper}></div>
        </div>
        <div className={styles.textInformationRepairs}>
          <h1>São muitos anos em reparos de smartphone</h1>
          <h2>Venha conhecer nossa loja e surpreenda-se com nossos serviços.</h2>
          <div className={styles.datasInformation}>
            <DataItem numero="1002" subtitulo="Satisfação" />
            <DataItem numero="102" subtitulo="Xiaomi" />
            <DataItem numero="12" subtitulo="Android" />
            <DataItem numero="22" subtitulo="Apple" />
          </div>
        </div>
      </div>

      <div className={styles.socialMedia}>
        <h1 className={styles.titleOurServices}>Redes Sociais</h1>
        <div className={styles.lineOurServices}></div>
        <div className={styles.boxSocialMedia}>
        </div>
      </div>

      <div className={styles.placesDelivery}>
        <h1 className={styles.titleOurServices}>Coletamos e entregamos o seu iPhone</h1>
        <div className={styles.lineOurServices}></div>
        <div className={styles.boxPlacesDelivery}>
          <div className={styles.cardPlace}>
            <div className={styles.topCardPlace}>
              <div className={styles.leftTopCardPlace}>R$0</div>
              <div className={styles.rightTopCardPlace}>
                <h1>Bairros</h1>
                <p>Região Circuvizinhas</p>
              </div>
            </div>
            <div className={styles.mainCardPlace}>
              <p>Pituba</p>
              <p>Pituba</p>
              <p>Pituba</p>
              <p>Pituba</p>
              <p>Pituba</p>
              <p>Pituba</p>
            </div>
          </div>
          <div className={styles.cardPlace}>
            <div className={styles.topCardPlace}>
              <div className={styles.leftTopCardPlace}>R$0</div>
              <div className={styles.rightTopCardPlace}>
                <h1>Bairros</h1>
                <p>Região Circuvizinhas</p>
              </div>
            </div>
            <div className={styles.mainCardPlace}>
              <p>Pituba</p>
              <p>Pituba</p>
              <p>Pituba</p>
              <p>Pituba</p>
              <p>Pituba</p>
              <p>Pituba</p>
            </div>
          </div>
          <div className={styles.cardPlace}>
            <div className={styles.topCardPlace}>
              <div className={styles.leftTopCardPlace}>R$0</div>
              <div className={styles.rightTopCardPlace}>
                <h1>Bairros</h1>
                <p>Região Circuvizinhas</p>
              </div>
            </div>
            <div className={styles.mainCardPlace}>
              <p>Pituba</p>
              <p>Pituba</p>
              <p>Pituba</p>
              <p>Pituba</p>
              <p>Pituba</p>
              <p>Pituba</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.containerInfoServices}>
        <div className={styles.textInfoServices}>
          <h1>Serviços entregues em até 40 minutos</h1>
          <p>Entendemos que você não pode ficar sem seu iPhone...</p>
        </div>
      </div>

      <div className={styles.feedBacks}>
        <h1 className={styles.titleOurServices}>Feedback dos nossos clientes.</h1>
        <div className={styles.lineOurServices}></div>
        <div className={styles.showSlide}>
          <div className={styles.feedBacksFlex}>
            <Carousel responsive={responsive}
              partialVisible={true}
              autoplay={true}
              className="containerCarousel" >
              <div className={styles.feedbacksSlide}>
                <div>
                  <FeedBackClient texto="Levei meu iphone com botão home estragado, e foi substituído por um novo origial e por um preço bacana." nome="Pedro Ferraz" />
                </div>
                <div>
                  <FeedBackClient texto="Levei meu iphone com botão home estragado, e foi substituído por um novo origial e por um preço bacana." nome="Pedro Ferraz" />
                </div>
                <div>
                  <FeedBackClient texto="Levei meu iphone com botão home estragado, e foi substituído por um novo origial e por um preço bacana." nome="Pedro Ferraz" />
                </div>
              </div>
              <div className={styles.feedbacksSlide}>
                <div>
                  <FeedBackClient texto="Levei meu iphone com botão home estragado, e foi substituído por um novo origial e por um preço bacana." nome="Pedro Ferraz" />
                </div>
                <div>
                  <FeedBackClient texto="Levei meu iphone com botão home estragado, e foi substituído por um novo origial e por um preço bacana." nome="Pedro Ferraz" />
                </div>
                <div>
                  <FeedBackClient texto="Levei meu iphone com botão home estragado, e foi substituído por um novo origial e por um preço bacana." nome="Pedro Ferraz" />
                </div>
              </div>
              <div className={styles.feedbacksSlide}>
                <div>
                  <FeedBackClient texto="Levei meu iphone com botão home estragado, e foi substituído por um novo origial e por um preço bacana." nome="Pedro Ferraz" />
                </div>
                <div>
                  <FeedBackClient texto="Levei meu iphone com botão home estragado, e foi substituído por um novo origial e por um preço bacana." nome="Pedro Ferraz" />
                </div>
                <div>
                  <FeedBackClient texto="Levei meu iphone com botão home estragado, e foi substituído por um novo origial e por um preço bacana." nome="Pedro Ferraz" />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      <div className={styles.containerContato}>
        <div className={styles.boxContato}>
          <form className={styles.formProfile}>
            <div className={styles.formContatoLeft}>
              <h1>CONTATE-NOS</h1>
              <div className={styles.fotoContateNos}>
                <Image src={fotoContato} height={160} />
              </div>
              <div className={styles.boxTextsFormContatoLeft}>
                <p><IoIosPhonePortrait />  +55 71 34933508 </p>
                <p><IoMdMail />  contato@playconsert.com.br </p>
                <p><IoMdMap />  Rua Leonor Calmon, 256 - Candeal, Salvador - BA, Centro Médico Christian Barnard, Loja 29 </p>
              </div>
            </div>
            <div className={styles.formContatoRight}>
              <Image src={email} height={140} />
              <input type="text" name="name" className={styles.field} placeholder="Nome" />
              <input type="text" name="email" className={styles.field} placeholder="Email" />
              <input type="text" name="number" className={styles.field} placeholder="Número" />
              <input type="textarea" name="serviço" className={styles.textArea} placeholder="Deixe uma mensagem..." />
              <button type="submit" className={styles.buttonContato}>Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
