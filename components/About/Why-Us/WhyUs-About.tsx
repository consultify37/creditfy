import Image from "next/image"
import Link from "next/link"
import WhyUsItem1 from "../../Home/Why-Us/Item1"

const WhyUsAbout = () => {
    return(
        <section id='why-us' className='mt-[12rem] w-full relative'>
            {/* Frames */}
            <span className='bg-secondary rounded-[200px_250px_0px_0px] w-[115vw] md:w-[102vw] -rotate-2 absolute -left-5 -top-20 h-32' />
            <div className="w-full flex relative flex-col justify-between items-center py-6 pb-12 md:py-12 bg-secondary px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
                <div className="w-full flex relative flex-col lg:flex-row justify-between items-start py-6 px-6 md:py-12 md:px-12 bg-[#000924] rounded-3xl">
                    <Image src='/images/rezultate/triangle.svg' className="absolute md:left-[-2rem] left-[-1.5rem] top-[-3rem] md:top-[-2rem] w-[60px] md:w-[110px] h-[110px]" alt='triangle' width={146} height={146}/>
                    <Image src='/images/rezultate/square.svg' className="absolute right-[-2.75rem] bottom-[-2.75rem] w-[99px] h-[99px]" alt='triangle' width={146} height={146}/>

                    <Image src='/images/rezultate/circle.svg' className="hidden lg:block absolute left-[25%] bottom-[-79px] w-[300px] h-[300px]" alt='triangle' width={250} height={250}/>
                    <Image src='/images/rezultate/hexagon.svg' className="hidden lg:block absolute left-[5%] bottom-[-39px] w-[200px] h-[200px]" alt='triangle' width={250} height={250}/>

                    <div className="flex items-start w-full flex-col md:mr-12">
                        <h2 className="text-primary text-2xl md:text-4xl font-semibold mb-4">Iată rezultatele noastre:</h2>
                        <p className="text-sm text-onSecondary mb-4 md:mb-10">Cu ani de experiență în domeniul consultanței pentru fonduri europene, am ajutat numeroase companii să-și atingă obiectivele și să-și realizeze proiectele cu succes.</p>
                        <Link className="py-3 bg-primary text-onPrimary rounded-[28.5px] font-semibold px-12 hover:scale-[1.05] transition-all" href="/contact">Contactează-ne!</Link>
                    </div>
                    <div className="grid gap-5 w-full grid-cols-2 justify-between mt-6 lg:mt-0 lg:ml-12">
                        <div className="flex flex-col bg-[#0F162E] p-2 md:p-4 rounded-xl">
                            <h6 className="text-primary text-lg md:text-3xl mb-1 font-bold">850+</h6>
                            <span className="text-onSecondary font-semibold text-[14px] md:text-2xl mt-[-10px]">clienți fericiți</span>
                            <p className="text-xs text-onSecondary">Peste 850 de companii din diverse domenii au obținut finanțarea dorită prin intermediul nostru.</p>
                        </div>
                        <div className="flex flex-col bg-[#0F162E] p-2 md:p-4 rounded-xl">
                            <h6 className="text-primary text-lg md:text-3xl mb-1 font-bold">20+</h6>
                            <span className="text-onSecondary font-semibold text-[14px] md:text-2xl mt-[-10px]">programe diferite</span>
                            <p className="text-xs text-onSecondary">Colaborând atât cu start-up-uri, cât și cu instituții publice, ne-am specializat în proiecte din domenii variate.</p>
                        </div>
                        <div className="flex flex-col bg-[#0F162E] p-2 md:p-4 rounded-xl">
                            <h6 className="text-primary text-lg md:text-3xl mb-1 font-bold">2</h6>
                            <span className="text-onSecondary font-semibold text-[14px] md:text-2xl mt-[-10px]">birouri în România</span>
                            <p className="text-xs text-onSecondary">Siguranța și confortul clienților sunt prioritățile noastre, de aceea avem birouri deschise în mai multe orașe.</p>
                        </div>
                        <div className="flex flex-col bg-[#0F162E] p-2 md:p-4 rounded-xl">
                            <h6 className="text-primary text-lg md:text-3xl mb-1 font-bold">5+</h6>
                            <span className="text-onSecondary font-semibold text-[14px] md:text-2xl mt-[-10px]">ani de experiență</span>
                            <p className="text-xs text-onSecondary">Cu peste 5 ani de experiență, am ajutat oameni din diverse domenii să-și îndeplinească visurile.</p>
                        </div>
                    </div>
                </div>
                <h2 className='text-white font-bold text-center w-full mt-12 md:mt-24 text-xl lg:text-2xl xl:text-3xl mb-8 lg:mb-16'>De ce să alegi Creditfy?</h2>
                <div className='relative flex flex-wrap w-full lg:mt-10 justify-center items-center md:justify-between md:items-center gap-y-20'>
                    {/* Left-Side */}
                    <div className='mx-auto lg:mx-0 w-full z-[2] lg:w-[49%] grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-y-8'>
                        <WhyUsItem1 
                            src="/images/flash.svg"
                            text="Evaluare rapidă"
                            title="Comunicare"
                        />
                        <WhyUsItem1 
                            src="/images/bullseye-arrow 1.svg"
                            text="Echipă tânără, inovatoare și dinamică, aducând idei proaspete și abordări moderne."
                            title="Consultanță personalizată"
                        />
                        <WhyUsItem1 
                            src="/images/share (1) 1.svg"
                            text="Oferim o abordare individuală pentru a ne asigura că satisfacem nevoile și obiectivele fiecărui client."
                            title="Soluții flexibile"
                        />
                        <WhyUsItem1 
                            src="/images/coins (1) 1.svg"
                            text="Profesionalismul nostru este evidențiat de abordarea noastră meticuloasă și atenția la detalii în fiecare proiect."
                            title="Expertiză financiară"
                        />
                    </div>
                    {/* Right-Side */}
                    <div className='relative mx-auto lg:mx-0'>
                        <Image src='/images/About/Pag - despre noi - structura misiunea noastra.png' alt='Why-Us' className='relative rounded-[35px] z-[2] w-[400px]' width={350} height={400} placeholder='blur' blurDataURL='/images/About/Pag - despre noi - structura misiunea noastra.png' />
                        <Image src='/images/About/triangle.svg' alt='triangle' width={164} height={164} className='z-[1] absolute -top-12 -left-16' /> 
                    </div>
                </div>
                <Link href='/testimoniale' className='py-3 md:py-4 bg-primary text-onPrimary rounded-[28.5px] font-semibold px-12 hover:scale-[1.05] transition-all mt-16'>Ce spun clienții noștri?</Link>
            </div>
        </section>
    )
}

export default WhyUsAbout