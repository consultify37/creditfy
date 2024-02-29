import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import NewsLetter from "../../components/global/newsletter";
import Head from "next/head";
import CTA from "../../components/CTA";
import Proces from "../../components/Proces";
import OurServices from "../../components/OurServices";
import Garantii from "../../components/Garantii";
import PageHeader from "../../components/Header/PageHeader";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { formatDate } from "../../utils/formatDate";
import { Article, Product } from "../../types";
import FeaturedProducts from "../../components/Home/Why-Us/FeaturedProducts";
import News from "../../components/Home/News/News";

type Props = {
  articles: Article[]
  products: Product[]
}

export default function Servicii({ articles, products }: Props) {
  const [scrollAmount, setScrollAmount] = useState<number>(0);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [scrollAmount]);
  // const [buttonNews, setButtonNews] = useState('Mă abonez')
  
  return (
    <>
        <Head>
            <title>{`${process.env.SITE} | Servicii`}</title>
        </Head>
        <PageHeader
          title="Împreună pentru succesul tău: servicii și produse de calitate"
        >
          <Image
              src="/images/star.svg"
              alt="Hero blue circle"
              width={100}
              height={200}
              className="absolute -right-12 bottom-24 md:bottom-12 z-[5] w-[120px] md:w-[200px]"
          />
          <Image
              src="/images/proces/hexagon.svg"
              width={130}
              height={130}
              className="absolute bottom-[88px] -left-12 md:bottom-5 md:left-0 w-[100px] md:w-[130px]"
              alt="Yellow triangle"
          />
        </PageHeader>
        <OurServices />
        <Proces />
        <Garantii />
        <CTA
          title="Acțiunea ta contează - Începe-ți <purple>proiectul<purple> de succes acum!"
          linkText="Completează formularul!"
          linkHref="/contact"
        />
        <FeaturedProducts 
          products={products}
        />
        <News
          articles={articles}
        />
        <NewsLetter headingText='Alătură-te comunității noastre și fii la curent cu cele mai noi oportunități de finanțare!' />
    </>
  );
}

export const getStaticProps = async () => {
  const articlesSnap = await  getDocs(query(collection(db, 'articles'), where('active', '==', true), where('featured', '==', true), orderBy('createdAt', 'desc'), limit(8)))
  var articles = articlesSnap.docs.map((doc) => {
      const { lastUpdated, createdAt, ...data } = doc.data()
      return ({ id: doc.id, formattedCreatedAt: formatDate(new Date(createdAt.seconds*1000)), ...data }) 
  })
  
  const collectionRef = query(collection(db, 'products'), where('active', '==', true), where('featured', '==', true), orderBy('lastUpdated', 'desc'), limit(8))
  const collectionSnap = await getDocs(collectionRef)
  
  const products: Product[] = collectionSnap.docs.map((doc) => {
    const { lastUpdated, ...data } = doc.data()

    return ({ id: doc.id, ...data } as Product)
  })

  return {
    props: { products, articles },
    revalidate: Number(process.env.REVALIDATE)
  }
}
