import Image from "next/image"
import Item1About from "./Item1"
import Item2About from "./Item2"

const AboutHome = () => {
    return(
        <section id='trust-us' className='bg-secondary mt-12 md:mt-24 w-full py-20 relative'>
            <Image src='/images/circle-about.svg' alt='Eclipse about' className='hidden md:block absolute right-0 top-[50%] translate-y-[45%] md:translate-y-0 md:top-20 z-[0] w-[220px] md:w-[300px]' width={300} height={300} />
            <Item1About />
            <Item2About />
        </section>
    )
}

export default AboutHome