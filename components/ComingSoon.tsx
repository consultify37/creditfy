import Image from 'next/image'
import React from 'react'

const ComingSoon = () => {
  return (
    <>
      <section
        id="HeroContainer"
        className={`relative flex flex-col w-full items-center justify-start pt-24 md:pt-40 px-6 sm:px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]`}
        >
        <div className="z-10 w-full flex flex-col items-center gap-8 md:gap-10 relative pt-14 md:pt-12">
          <div className="relative flex items-center justify-center">
            <h1 className="text-onSecondary text-[28px] md:text-[48px] xl:text-[64px] font-extrabold text-center">
              Coming soon...
            </h1>
          </div>
          <div className="relative w-[100%] home-carousel flex items-center justify-center mx-auto">
            <Image
              id="hero-video"
              src="/images/polygon.svg"
              alt="Hero video"
              width={120}
              height={120}
              className="absolute z-[4] w-[100px] md:w-[160px] -top-10 -left-4 md:-top md:-top-10 xl:-left-4 xl:-top-14"
              />
          </div>
          </div>
        <span className="absolute block md:hidden -left-[4rem] -top-12 bg-secondary w-[127vw] h-[118%] -rotate-[5deg] z-[4] rounded-[0_0_165px_100px] overflow-hidden"/>
        <span className="absolute block md:hidden -left-[4rem] -top-12 bg-secondary w-[127vw] h-[40%] z-[4] rounded-[0_0_165px_100px] overflow-hidden"/>
        <Image
          src="/images/circle-hero-right.svg"
          alt="Hero blue circle"
          width={200}
          height={200}
          className="block md:hidden absolute -right-52 -top-24 xl:top-0 z-[5] w-[321px]"
          />
        <Image
          src="/images/triangle-hero.svg"
          alt="Hero blue circle"
          width={140}
          height={140}
          className="block md:hidden absolute w-[82px] -right-0 bottom-[180px] z-[11]"
          />
        <Image
          src="/images/circle-hero-left.svg"
          alt="Hero green circle"
          width={200}
          height={200}
          className="block md:hidden absolute w-[176px] -left-20 -top-[140px] z-[100]"
        />
      </section>
      <span className="absolute hidden md:block top-0 bg-secondary w-[102vw] md:h-[400px] z-[4] overflow-hidden" />
      <span className="absolute hidden md:block -left-4 top-0 bg-secondary w-[102vw] md:h-[600px] z-[4] -rotate-[5deg] rounded-[0_0_164px_144px] xl:rounded-[0_0_200px_250px] overflow-hidden">
        <Image
          src="/images/circle-hero-right.svg"
          alt="Hero blue circle"
          width={200}
          height={200}
          className="absolute -right-12 -top-4 xl:top-0 z-[5] w-[140px] xl:w-[378px]"
          />
        <Image
          src="/images/triangle-hero.svg"
          alt="Hero blue circle"
          width={140}
          height={140}
          className="absolute -right-8 w-24 xl:w-[140px] bottom-[1.5rem] z-[100] xl:right-[300px] xl:bottom-28"
          />
        <Image
          src="/images/circle-hero-left.svg"
          alt="Hero green circle"
          width={200}
          height={200}
          className="absolute w-[100px] md:w-[250px] md:left-0 md:-top-30 z-[100]"
        />
      </span>
    </>
  )
}

export default ComingSoon