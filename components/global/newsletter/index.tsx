import Image from "next/image"
import { useState } from "react"
import toast from "react-hot-toast"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../../firebase"

interface NewsLetterProps {
  headingText: string
}

export default function NewsLetter({ headingText }: NewsLetterProps) {
  const [newsletter, setNewsletter] = useState('')
  
  const upload = async (e: any) => {
    e.preventDefault()
    
    try {
      const collectionRef = collection(db, 'newsletter')
      await addDoc(collectionRef, { website: process.env.SITE, email: newsletter })

      toast.success('Mulțumim pentru că te-ai abonat la newsletter-ul nostru! 🚀', { duration: 5000, style: { textAlign: 'center' } })
      setNewsletter('')
    } catch (e) {
      toast.error('Ceva nu a mers bine. Încearcă din nou!')
    }
  }
  
  return (
    <section className="my-16 mt-40 md:my-32 md:mt-48 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
      <div className="relative px-6 pb-0 md:px-20 md:py-0 py-2 flex items-center mt-32 justify-between flex-col lg:flex-row bg-secondary rounded-[16px] w-auto lg:h-[350px]">
        <Image src='/images/triangle-news.svg' className="absolute right-[-2rem] bottom-[-2rem] md:bottom-[ihnerit] md:top-[-2rem] w-[110px] h-[110px]" alt='triangle' width={146} height={146}/>
        <div className="relative flex">
          <Image
            src="/images/news.png"
            alt="people-cheering"
            className="relative top-[-90px] lg:top-[auto] w-[280px] lg:w-[380px] h-auto z-[2] rounded-3xl mb-10 md:mb-0"
            width={200}
            height={500}
          />
          <Image
            src="/images/Ellipse 23.svg"
            alt="people-cheering"
            className="absolute right-[-30px] -top-4 xl:left-[280px] md:left-[220px] md:top-7 w-[130px] lg:w-[145px] h-auto z-2"
            width={200}
            height={500}
          />
          <Image
            src="/images/Ellipse 24.svg"
            alt="people-cheering"
            className="absolute left-[-30px] top-[100px] xl:bottom-[80px] md:-left-10 md:bottom-[60px] z-2 w-[130px] lg:w-[145px] h-auto"
            width={200}
            height={500}
          />
        </div>
        <div className="lg:mt-0 relative top-[-90px] lg:top-[auto] max-w-[470px]">
          <h2 className="text-white text-[16px] md:text-[26px] font-bold">
            {headingText}
          </h2>
          <form 
            onSubmit={upload} 
            className="relative flex mt-10 flex-col lg:flex-row items-center"
          >
            <input
              className="py-3 text-onSecondary xl:px-6 px-4 lg:px-5 w-full placeholder:text-onSecondary bg-secondary border-2 border-primary rounded-full"
              type="email"
              name="Email"
              placeholder='Adresa ta de email'
              required
              onChange={(e) => setNewsletter(e.target.value)}
              value={newsletter}
            />
            <button type="submit" className="text-onPrimary font-bold lg:absolute w-full mt-3 lg:mt-0 lg:right-0 z-30 transition-all hover:scale-[1.05] lg:w-44 border-4 cursor-pointer border-secondary bg-primary py-4 px-10 text-sm rounded-full">
              Mă abonez
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
