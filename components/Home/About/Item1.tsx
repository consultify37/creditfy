import Image from "next/image";
import Link from "next/link";

const Item1About = () => {
  return (
    <div className="w-full mx-auto px-7 md:px-[40px] xl:px-[140px] 2xl:px-[276px] gap-[6rem] flex gap-y-20 justify-between flex-wrap z-[2]">
      <div className="w-full flex-1 z-[2] gap-5 font-light">
        <h2 className="text-xl font-bold text-primary z-[2] md:text-xl lg:text-2xl xl:text-4xl">
          Despre Consultify
        </h2>
        <p className="text-white font-base max-w-[600px] text-[16px] mt-5 z-[2] mb-8">
          Ai nevoie de finanțare prin fonduri europene pentru proiectul tău? Consultify te poate ajuta! Suntem specializați în accesarea fondurilor europene pentru diverse proiecte, de la turism și tehnologie la agricultură durabilă și dezvoltare rurală.
        </p>
        <p className="text-white font-base max-w-[600px] text-[16px] mt-5 z-[2]">
          La Consultify, ne concentrăm pe nevoile tale specifice. Echipa noastră de experți îți oferă cele mai bune soluții de finanțare personalizate, indiferent de domeniul în care activezi. Accesarea fondurilor europene poate fi complicată, dar Consultify simplifică și eficientizează acest proces pentru tine!
        </p>
        <div className="flex gap-4 mt-6 z-[2]">
          <Link
            href="/Programe"
            className="py-3 bg-primary text-secondary flex items-center font-semibold rounded-[28.5px] px-10 sm:px-12 transition-all hover:scale-[1.05]"
          >
            Programe
          </Link>
          <Link
            href="/contact"
            className="py-3 bg-transparent text-onSecondary flex items-center rounded-[28.5px] border-2 font-semibold border-primary px-10 sm:px-12 transition-all hover:scale-[1.05]"
          >
            Contact
          </Link>
        </div>
      </div>
      <Image
        src="/images/home-about-1.png"
        alt="About home 1"
        className="relative rounded-[28.5px] w-full md:w-[450px] mx-auto z-[4]"
        width={400}
        height={400}
      />
    </div>
  );
};
export default Item1About;
