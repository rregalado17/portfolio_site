import React from 'react'

const CardInfo = ({ content, name, youtube, img, github }) => (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
        <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'> {content} </p>   
        <div className='flex flex-row'>
            <div className='flex flex-col ml-4'>
                <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>{name}</h4>
                <a href={youtube} className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>Demo</a>
                <a href={github} className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>Repo</a>
            </div>
        </div>
    </div>

  )

export default CardInfo