import Image from "next/image";
import Logos from "./Logos";

const TrustSRL = () => {
  return (
    <section
      id="feedback-firme"
      className="w-full flex flex-col items-center mt-32 md:mt-[72px] justify-center"
    >
      <h2 className="text-secondary font-bold text-[20px] md:text-xl lg:text-2xl xl:text-4xl text-center px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
      Peste 850 de companii au accesat fonduri europene cu ajutorul nostru. 
      </h2>
      <h3 className="text-secondary text-[16px] md:text-lg lg:text-xl xl:text-2xl px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
        Iată câteva dintre ele:
      </h3>
      <div className="md:px-[56px] xl:px-[100px] 2xl:px-[180px] pt-8">
        <Logos />
      </div>
      {/* <div className="flex mt-4 gap-5 flex-wrap justify-center">
        <Image
          src="/images/feedback-1.png"
          width={158}
          height={49}
          className="aspect-[3/2] object-contain"
          placeholder="blur"
          alt="Feedback 1"
          blurDataURL="/images/feedback-1.png"
        />
        <Image
          src="/images/feedback-2.png"
          width={158}
          height={49}
          className="aspect-[3/2] object-contain"
          placeholder="blur"
          alt="Feedback 1"
          blurDataURL="/images/feedback-1.png"
        />
        <Image
          src="/images/feedback-3.png"
          width={158}
          height={49}
          className="aspect-[3/2] object-contain"
          placeholder="blur"
          alt="Feedback 1"
          blurDataURL="/images/feedback-1.png"
        />
        <Image
          src="/images/feedback-4.png"
          width={158}
          height={49}
          className="aspect-[3/2] object-contain"
          placeholder="blur"
          alt="Feedback 1"
          blurDataURL="/images/feedback-1.png"
        />
      </div> */}
    </section>
  );
};

export default TrustSRL;
