import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Rezultate from "../../../components/Rezultate";
import FAQAbout from "../../../components/About/FAQ/FAQ";
import NewsLetter from "../../../components/global/newsletter";
import News from "../../../components/Home/News/News";
import ShopItem from "../../../components/shop/ShopItem";
import WhyUsCart from "../../../components/Home/Why-Us/FeaturedProducts";

export default function PaginaProgram() {
  return(
    <>
      <Head>
        <title>Admin | Program</title>
      </Head>
      <div className="my-8 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
        <div className="relative h-[350px]">
          <Image className="mx-auto absolute w-full h-full object-cover rounded-[35px] p-2" src='/images/blog-post-1.png' alt="Banner"/>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
        <h1 className="text-2xl lg:text-4xl text-[#8717F8] font-bold mb-8">digiimm - POC 411 / POC 411 BIS</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, voluptates impedit. Rerum, nesciunt tempore animi aspernatur beatae iste inventore quod quisquam sed. A modi ad deleniti quae dolores facilis placeat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laboriosam, hic esse magnam modi veniam velit incidunt a cum doloremque iure cumque similique eligendi id ab repellendus, odit sapiente eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis optio provident mollitia, dolorem molestiae beatae animi exercitationem dicta sint cum quo fuga culpa excepturi consequuntur suscipit ipsa vitae. Architecto, quibusdam!</p>
      </div>
      <section className="w-full mt-32 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
        <div className="w-full flex relative flex-col h-[300px] lg:h-[400px] justify-center items-center px-6 py-6 lg:py-12 lg:px-12 bg-[#260056] rounded-[38px] border-[16px] border-[#EDD7FF]">
          <Image src='/images/PaginaProgram/triangle.svg' className="absolute right-[-2rem] top-[-2rem] w-[60px] lg:w-[110px]" alt='triangle' width={146} height={146}/>
          <Image src='/images/PaginaProgram/hexagon.svg' className="absolute lg:-right-[-2rem] lg:-bottom-[3rem] right-[1rem] -bottom-[2rem] w-[70px] lg:w-[120px]" alt='triangle' width={146} height={146}/>

          <Image src='/images/PaginaProgram/pentagon.svg' className="absolute left-[-2rem] lg:left-[-2.5rem] -top-[2rem] w-[65px] lg:w-[100px]" alt='triangle' width={250} height={250}/>
          <Image src='/images/PaginaProgram/big-circle.svg' className="absolute left-0 bottom-0 w-[60px] lg:w-[250px]" alt='triangle' width={250} height={250}/>

          <h5 className="text-md lg:text-3xl text-white text-center font-bold mb-8 max-w-[750px]">Pentru acest program, finanțarea este în valoare de</h5>
          <h2 className="text-xl lg:text-6xl text-white font-bold mb-12">25.000$ - 100.000$</h2>
          <Link className="py-4 bg-[#8717F8] text-center text-white rounded-[28.5px] font-medium px-10 text-xs md:text-[16px]" href="/contact">Aplica acum!</Link>
        </div>
      </section>
      <section id='product-guide' className='mt-32 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]'>
        <div className='flex flex-col lg:flex-row justify-between items-center'>
            <Image src='/images/PaginaProgram/cui.svg' alt='About home 1' className='relative rounded-[28.5px] w-full md:w-[400px] mx-auto z-[4]' width={400} height={400} />
            <div className='flex flex-col gap-2 w-full'>
                <h2  className='font-bold text-[#8717F8] text-xl lg:text-2xl xl:text-4xl'>Programul ideal pentru antreprenorii în domeniul agriculturii și al apiculturii</h2>
                <p className='text-[#00103C] text-base mt-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies nibh vel massa iaculis porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ac orci at convallis. Vivamus a auctor sapien, sed viverra erat. Cras aliquam auctor urna. Pellentesque molestie orci quis leo ornare dapibus. Nulla auctor finibus aliquam. Etiam vitae efficitur orci, id gravida sapien. Nulla facilisis est lorem, tincidunt elementum felis bibendum eu.</p>
            </div>
        </div>
      </section>
      <section className="w-full flex flex-col lg:grid lg:gap-5 lg:grid-cols-2 mt-32 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
        <div className="flex flex-row bg-[#260056] p-6 rounded-3xl mb-8">
            <div className="w-[-webkit-fill-available] max-w-[fit-content] flex items-center rounded-xl bg-[#A634FF] p-3 lg:p-4 h-[max-content] jutify-center mr-2">
                <span className="text-lg lg:text-3xl text-white text-center w-[25px] lg:w-[30px] h-[25px] lg:h-[30px] font-bold">1</span>
            </div>
            <div className="flex flex-col ml-2">
                <h4 className="text-white font-bold text-xl mb-2 lg:text-2xl">
                    Suprafață a terenului de  minim 2ha
                </h4>
                <p className="text-white text-xs lg:text-base">
                    Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.
                </p>
            </div>
        </div>
        <div className="flex flex-row bg-[#260056] p-6 rounded-3xl mb-8">
            <div className="w-[-webkit-fill-available] max-w-[fit-content] flex items-center rounded-xl bg-[#A634FF] p-3 lg:p-4 h-[max-content] jutify-center mr-2">
                <span className="text-lg lg:text-3xl text-white text-center w-[25px] lg:w-[30px] h-[25px] lg:h-[30px] font-bold">2</span>
            </div>
            <div className="flex flex-col ml-2">
                <h4 className="text-white font-bold text-xl mb-2 lg:text-2xl">
                    Suprafață a terenului de  minim 2ha
                </h4>
                <p className="text-white text-xs lg:text-base">
                    Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.
                </p>
            </div>
        </div>
        <div className="flex flex-row bg-[#260056] p-6 rounded-3xl mb-8">
            <div className="w-[-webkit-fill-available] max-w-[fit-content] flex items-center rounded-xl bg-[#A634FF] p-3 lg:p-4 h-[max-content] jutify-center mr-2">
                <span className="text-lg lg:text-3xl text-white text-center w-[25px] lg:w-[30px] h-[25px] lg:h-[30px] font-bold">3</span>
            </div>
            <div className="flex flex-col ml-2">
                <h4 className="text-white font-bold text-xl mb-2 lg:text-2xl">
                    Suprafață a terenului de  minim 2ha
                </h4>
                <p className="text-white text-xs lg:text-base">
                    Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.
                </p>
            </div>
        </div>
        <div className="flex flex-row bg-[#260056] p-6 rounded-3xl mb-8">
            <div className="w-[-webkit-fill-available] max-w-[fit-content] flex items-center rounded-xl bg-[#A634FF] p-3 lg:p-4 h-[max-content] jutify-center mr-2">
                <span className="text-lg lg:text-3xl text-white text-center w-[25px] lg:w-[30px] h-[25px] lg:h-[30px] font-bold">4</span>
            </div>
            <div className="flex flex-col ml-2">
                <h4 className="text-white font-bold text-xl mb-2 lg:text-2xl">
                    Suprafață a terenului de  minim 2ha
                </h4>
                <p className="text-white text-xs lg:text-base">
                    Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.
                </p>
            </div>
        </div>
        <div className="flex flex-row bg-[#260056] p-6 rounded-3xl mb-8">
            <div className="w-[-webkit-fill-available] max-w-[fit-content] flex items-center rounded-xl bg-[#A634FF] p-3 lg:p-4 h-[max-content] jutify-center mr-2">
                <span className="text-lg lg:text-3xl text-white text-center w-[25px] lg:w-[30px] h-[25px] lg:h-[30px] font-bold">5</span>
            </div>
            <div className="flex flex-col ml-2">
                <h4 className="text-white font-bold text-xl mb-2 lg:text-2xl">
                    Suprafață a terenului de  minim 2ha
                </h4>
                <p className="text-white text-xs lg:text-base">
                    Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.
                </p>
            </div>
        </div>
        <div className="flex flex-row bg-[#260056] p-6 rounded-3xl mb-8">
            <div className="w-[-webkit-fill-available] max-w-[fit-content] flex items-center rounded-xl bg-[#A634FF] p-3 lg:p-4 h-[max-content] jutify-center mr-2">
                <span className="text-lg lg:text-3xl text-white text-center w-[25px] lg:w-[30px] h-[25px] lg:h-[30px] font-bold">6</span>
            </div>
            <div className="flex flex-col ml-2">
                <h4 className="text-white font-bold text-xl mb-2 lg:text-2xl">
                    Suprafață a terenului de  minim 2ha
                </h4>
                <p className="text-white text-xs lg:text-base">
                    Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.
                </p>
            </div>
        </div>
      </section>
      <Rezultate />
      <FAQAbout />
      <div className="w-full mt-32 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
          <div className="flex justify-start items-start">
            <h3 className="text-2xl lg:text-3xl text-[#8717F8] font-bold">
              Consultify vine în ajutorul tău cu produse digitale pentru scalarea
              afacerii tale
            </h3>
          </div>
          {/* Cart */}
          <WhyUsCart />
          <Link href='/shop' className="bg-[#8717F8] flex items-center justify-center w-[max-content] mx-auto justify-self-center px-12 py-3 text-white rounded-[28.5px]">
            vezi toate produsele
          </Link>
      </div>
      <News 
        articles={[]}
      />
      <NewsLetter headingText={'Alătură-te comunității noastre și fii la curent cu cele mai noi oportunități de finanțare!'} />

    </>
  )
}