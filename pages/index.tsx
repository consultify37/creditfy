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
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase"
import { Program, Slide } from "../types"

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
  const slidesRef = query(collection(db, 'slides-homepage'), where('site', '==', process.env.SITE))
  const slidesSnap = await getDocs(slidesRef)

  const slides = slidesSnap.docs.map((doc) => (
    { id: doc.id, ...doc.data() }
  ))

  const programeRef = query(collection(db, 'programe-fonduri'), where('site', '==', process.env.SITE))
  const programeSnap = await getDocs(programeRef)

  const programe = programeSnap.docs.map((doc) => (
    { id: doc.id, ...doc.data() }
  ))

  return {
    props: { programe, slides },
    revalidate: Number(process.env.REVALIDATE)
  }
}
