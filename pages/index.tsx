import React from "react"
import Head from "next/head"
import HomeHeader from "../components/Home/HomeHeader"
import AboutHome from "../components/Home/About/About"
import TrustSRL from "../components/Home/Trust"
import OurClients from "../components/Home/OurClients/OurClients"
import CarouselPrograme from "../components/fonduri/index"
import Rezultate from "../components/Rezultate"
import Proces from "../components/Proces"
import CTA from "../components/CTA"
import NewsLetter from "../components/global/newsletter"
import Garantii from "../components/Garantii"
import { Program, Slide } from "../types"
import axios from "axios"

type Props = {
  programe: Program[]
  slides: Slide[]
}

export default function Home({ slides, programe }: Props) {
  return (
    <> 
      {/* pageSettings */}
      <Head>
        <title>Consultify | Acasă</title>
      </Head>
      <HomeHeader slides={slides} />
      <TrustSRL />
      <AboutHome />
      <CarouselPrograme programe={programe} />
      <Rezultate />
      <Garantii />
      <div id="proces"></div>
      <Proces />
      <div className="mt-16 md:mt-32 px-0 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
        <OurClients hasTitle={true} />
      </div>
      <CTA
        title="Acțiunea ta contează - Începe-ți <purple>proiectul<purple> de succes acum!"
        linkText="Completează formularul!"
        linkHref="/contact"
      />
      {/* <div className="w-full mt-32 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
          <div className="flex justify-start items-start">
            <h3 className="md:text-xl lg:text-2xl xl:text-[32px] text-[#8717F8] font-bold">
              Crește eficiența și productivitatea cu serviciile <br /> și produsele digitale oferite de Consultify și Inspirely!
            </h3>
          </div>
          <WhyUsCart />
          <Link href='/shop' className="bg-[#8717F8] transition-all hover:scale-[1.05] flex font-semibold items-center justify-center w-[max-content] mx-auto justify-self-center px-12 py-3 text-white rounded-[28.5px]">
            Vezi toate produsele
          </Link>
      </div> */}
      {/* <News /> */}
      <NewsLetter headingText={'Alătură-te comunității noastre și fii la curent cu cele mai noi oportunități de finanțare!'} />
    </>
  )
}

export const getStaticProps = async () => {
  const response = await axios.get('https://api.inspiredconsulting.ro/admin/get_slide_homepages', {
    params: {
      website: process.env.SITE
    }
  })
  
  const slides = response.data.map((slide: any) => (
    { image: `https://api.inspiredconsulting.ro/routes${slide.poza}`, ...slide } as Slide
  ))

  const response2 = await axios.get('https://api.inspiredconsulting.ro/admin/get_programe', {
    params: {
      website: process.env.SITE
    }
  })
      
  const programe = response2.data.map( (program: any) => ({ 
    backgroundImage: { file: null, image: `https://api.inspiredconsulting.ro/routes${program.fundal}` },
    bulletPoints: program.bulet_point.split(';;'),
    categorie: program.categorie,
    conditions: program.conditii_aplicare.split(';;;').map((item: any) => {
      const [condition, description] = item.split(';;')
      return { condition, description: description ? description : '' }
    }),
    descriere: program.descriere,
    descriere3: program.descriere,
    faqs: program.intrebari.split(';;;').map((item: any) => {
      const [question, answear] = item.split(';;')
      return { question, answear: answear ? answear : '' }
    }),
    id: program.id,
    imaginePrincipala: { file: null, image: `https://api.inspiredconsulting.ro/routes${program.principala}` },
    suma: program.suma_finantare,
    suma2: program.suma_finantare,
    text1: program.text1,
    text2: program.text2,
    title: program.titlu,
    title2: program.titlu,
    title3: program.adreseaza_titlu
  }) as Program )

  return {
    props: { programe, slides },
    revalidate: Number(process.env.REVALIDATE)
  }
}
