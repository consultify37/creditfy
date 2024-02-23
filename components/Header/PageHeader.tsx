type Props = {
  title: string
  children: React.ReactNode
}

const PageHeader = ({ title, children }: Props) => {
  return (
    <div className="relative">
        <section
            id="about-header"
            className="relative bg-secondary mb-28 md:mb-48 w-full pt-32 pb-4 md:pb-6 flex flex-col items-center justify-center overflow-visible z-10"
        >
            <h1 className="text-[24px] md:text-4xl xl:text-[44px] font-extrabold md:leading-[48px] text-white md:max-w-[68%] xl:max-w-[60%] text-center pt-20 md:pt-20 mx-4 z-50">
                { title }
            </h1>
            { children }
            <span className='bg-[#260056] rounded-[0_0_200px_250px] w-[103vw] -rotate-2 absolute -left-5 -bottom-20 h-32 hidden md:block' />
        </section>
        <span className="md:hidden bg-secondary rounded-[0_0_164px_144px] -left-[24vw] md:left-0 w-[136vw] -rotate-[5.09deg] absolute -bottom-12 h-[700px]" />
    </div>
  )
}

export default PageHeader