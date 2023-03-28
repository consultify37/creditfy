const WhyUsItem1 = () => {
    return(
        <div className='flex flex-col gap-2'>
            <span className='h-[51px] w-[51px] flex items-center bg-[#8717F861] rounded-md'>
                <img src='/images/questions-comment.png' className='mx-auto' alt='Questions comment' width={25} height={10} />
            </span>
            <h3 className='font-bold text-[24px] text-white'>Comunicare</h3>
            <p className='font-normal text-white text-sm md:text-[16px'>
                Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. 
            </p>
        </div>
    )
}

export default WhyUsItem1