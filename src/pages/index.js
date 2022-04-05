import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Monitor from '../assets/monitor.png'
import CardServices from '../components/cardServices'
import fotoQuestions from '../assets/fotoQuestions.svg'
import ButtonItem from '../components/buttonItem'
import DataItem from '../components/dataItem'
import FeedBackClient from '../components/feedBackClient'
import socialOrange from '../assets/socialOrange.svg'
import emailOrange from '../assets/emailOrange.svg'
import face from '../assets/face.png'
import Logo from '../assets/logo.png'
import Head from 'next/head';
import { IoLogoWhatsapp } from 'react-icons/io'
import Link from 'next/link'

import {  IoIosHome, IoIosPhonePortrait, IoMdMail, IoMdMap, IoIosMenu, IoIosCheckmark, IoMdCall, IoMdHelp } from 'react-icons/io'
import { SiWhatsapp, SiFacebook, SiGmail, SiInstagram } from 'react-icons/si'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import React, { useRef, useState } from 'react';

export default function Home() {

  const [hamburguer, setHamburguer] = useState(false)

  const feedbacks = useRef()

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1230 },
      items: 4
    },
    minDesktop: {
      breakpoint: { max: 1230, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 3
    },
    tablet2: {
      breakpoint: { max: 800, min: 650 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1
    }
  }

  function nextClick(event) {
    event.preventDefault();
    feedbacks.current.scrollLeft += feedbacks.current.offsetWidth
  }

  function backClick(event) {
    event.preventDefault();
    feedbacks.current.scrollLeft -= feedbacks.current.offsetWidth
  }

  const maskPhone = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})(\d+?)$/, "$1");
  };

  const [phone, setPhone] = useState("");

  return (
    <>
      <Link href="#" passHref >
        <div className={styles.iconeZap}>
          <IoLogoWhatsapp color='#25D366' size={60} />
        </div>
      </Link>
      <Head>
        <title>Assistencia</title>
      </Head>

      <div className="progress">
        <div className="progress_highlight" id="hightlight">
        </div>
      </div>

      <header className={styles.header}>
        <div className={styles.containerHeader}>
          <div className={styles.logo}>
            <Image src={Logo} width={50} height={70} alt="Logo Image" />
          </div>
          <nav className={styles.navBar}>
            <ul className={styles.listaHeader}>
              <li className={styles.itemListHeader}><a className={styles.linkitem} href="#home">HOME</a></li>
              <li className={styles.itemListHeader}><a className={styles.linkitem} href="#serviços">SERVIÇOS</a></li>
              <li className={styles.itemListHeader}><a className={styles.linkitem} href="#duvidas">DÚVIDAS</a></li>
              <li className={styles.itemListHeader}><a className={styles.linkitem} href="#redes">REDES SOCIAIS</a></li>
              <li className={styles.itemListHeader}><a className={styles.linkitem} href="#coleta">COLETA E ENTREGA</a></li>
              <li className={styles.itemListHeader}><a className={styles.linkitem} href="#feedbacks">FEEDBACKS</a></li>
              <li className={styles.itemListHeader}><a className={styles.linkitem} href="#contato">CONTATOS</a></li>
            </ul>
          </nav>
          <div className={styles.menuHamburguer}>
            <IoIosMenu onClick={() => setHamburguer(!hamburguer)} />
            <nav className={`${styles.navHamburguer} ${hamburguer ? styles.showHamburguer : styles.dontShowHamburguer} `}>
              <ul className={styles.listaHamburguer}>
                <li><a href="#home">HOME</a></li>
                <li><a href="#serviços">SERVIÇOS</a></li>
                <li><a href="#duvidas">DÚVIDAS</a></li>
                <li><a href="#redes">REDES SOCIAIS</a></li>
                <li><a href="#coleta">COLETA E ENTREGA</a></li>
                <li><a href="#feedbacks">FEEDBACKS</a></li>
                <li><a href="#contato">CONTATOS</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className={styles.backgroundHome} id="home">
        <div className={styles.opacityBackground}></div>
        <div className={styles.flexHome}>
          <div className={styles.titleHome}>
            <h1>Solução Completa</h1>
            <h3>iPhone, iPad, iMac e Macbook</h3>
          </div>
        </div>
      </div>

      <div className={styles.sectionCarousel}>
        <div className={styles.boxCarouselMain}>

        </div>
      </div >

      <div className={styles.ourServices} id="serviços">
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

      <div className={styles.infoServices} id="duvidas">

        <div className={styles.leftContainerImgCell}>
          <Image src={fotoQuestions} alt="Image Cell" width={450} />
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
          <div className={styles.datasInformation} id="redes">
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
        <a href="http://www.facebook.com">
          <div className={styles.boxSocialMedia} >
            <Image src={face} alt="Foto Face" width={1000} />
          </div>
        </a>
      </div>

      <div className={styles.placesDelivery} id="coleta">
        <h1 className={styles.titleOurServices}>Coletamos e entregamos o seu iPhone</h1>
        <div className={styles.lineOurServices}></div>
        <div className={styles.boxPlacesDelivery}>
          <div className={styles.cardPlace}>
            <div className={styles.lineTopCard}></div>
            <div className={styles.titleAndPrice}>
              <h1>Bairros de entrega</h1>
              <span>R$ 0</span>
            </div>
            <div className={styles.listBairros}>
              <p><IoIosCheckmark /> Pituba</p>
              <p><IoIosCheckmark /> Pituba</p>
              <p><IoIosCheckmark /> Pituba</p>
              <p><IoIosCheckmark /> Pituba</p>
              <p><IoIosCheckmark /> Pituba</p>
            </div>
          </div>
          <div className={styles.cardPlace}>
            <div className={styles.lineTopCard}></div>
            <div className={styles.titleAndPrice}>
              <h1>Bairros de entrega</h1>
              <span>R$ 0</span>
            </div>
            <div className={styles.listBairros}>
              <p><IoIosCheckmark /> Pituba</p>
              <p><IoIosCheckmark /> Pituba</p>
              <p><IoIosCheckmark /> Pituba</p>
              <p><IoIosCheckmark /> Pituba</p>
              <p><IoIosCheckmark /> Pituba</p>
            </div>
          </div>
          <div className={styles.cardPlace}>
            <div className={styles.lineTopCard}></div>
            <div className={styles.titleAndPrice}>
              <h1>Bairros de entrega</h1>
              <span>R$ 0</span>
            </div>
            <div className={styles.listBairros}>
              <p><IoIosCheckmark /> Pituba</p>
              <p><IoIosCheckmark /> Pituba</p>
              <p><IoIosCheckmark /> Pituba</p>
              <p><IoIosCheckmark /> Pituba</p>
              <p><IoIosCheckmark /> Pituba</p>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.containerInfoServices}>
        <div className={styles.textInfoServices}>
          <h1 id="feedbacks">Serviços entregues em até 40 minutos</h1>
          <p>Entendemos que você não pode ficar sem seu iPhone...</p>
        </div>
      </div>

      <div className={styles.feedBacks}>
        <h1 className={styles.titleOurServices}>Feedback dos nossos clientes.</h1>
        <div className={styles.lineOurServices}></div>
        <Carousel
          responsive={responsive}
        >
          <FeedBackClient texto="Levei meu iphone com botão home estragado, e foi substituído por um novo origial e por um preço bacana." nome="Pedro Ferraz" />
          <FeedBackClient texto="Levei meu iphone com botão home estragado, e foi substituído por um novo origial e por um preço bacana." nome="Pedro Ferraz" />
          <FeedBackClient texto="Levei meu iphone com botão home estragado, e foi substituído por um novo origial e por um preço bacana." nome="Pedro Ferraz" />
          <FeedBackClient texto="Levei meu iphone com botão home estragado, e foi substituído por um novo origial e por um preço bacana." nome="Pedro Ferraz" />
          <FeedBackClient texto="Levei meu iphone com botão home estragado, e foi substituído por um novo origial e por um preço bacana." nome="Pedro Ferraz" />
          <FeedBackClient texto="Levei meu iphone com botão home estragado, e foi substituído por um novo origial e por um preço bacana." nome="Pedro Ferraz" />
        </Carousel>
      </div>

      <div className={styles.containerContato} id="contato">
        <div className={styles.boxContato}>
          <form className={styles.formProfile}>
            <div className={styles.formContatoLeft}>
              <h1>CONTATE-NOS</h1>
              <div className={styles.fotoContateNos}>
                <Image src={socialOrange} height={160} alt="Social Image" />
              </div>
              <div className={styles.boxTextsFormContatoLeft}>
                <p><IoIosPhonePortrait />  +55 71 34933508 </p>
                <p><IoMdMail />  contato@playconsert.com.br </p>
                <p><IoMdMap />  Rua Leonor Calmon, 256 - Candeal, Salvador - BA, Centro Médico Christian Barnard, Loja 29 </p>
              </div>
            </div>
            <form className={styles.formContatoRight}>
              <Image src={emailOrange} height={140} />
              <input type="text" name="name" className={styles.field} placeholder="Nome" />
              <input type="email" name="email" className={styles.field} placeholder="Email" />
              <input
                value={phone}
                name="number"
                className={styles.field}
                placeholder="Número"
                onChange={(e) => setPhone(maskPhone(e.target.value))}
              />
              <input type="textarea" name="serviço" className={styles.textArea} placeholder="Deixe uma mensagem..." />
              <button type="submit" className={styles.buttonContato}>Enviar</button>
            </form>
          </form>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.topFooter}>
          <div className={styles.copyright}>
            <p>Copyright © 2022 Assistência Técnica</p>
            <div className={styles.socialMediaFooter}>
              <a href=""><SiInstagram /></a>
              <a href=""><SiGmail /></a>
              <a href=""><SiFacebook /></a>
              <a href=""><SiWhatsapp /></a>
            </div>
          </div>
          <ul>
            <a href=""><li>Fale conosco</li></a>
            <a href=""><li>Acesse nosso instagram</li></a>
            <a href=""><li>Nossos serviços</li></a>
          </ul>
        </div>
      </div>
    </>
  )
}
