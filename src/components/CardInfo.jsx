import React from 'react'

const CardInfo = ({ content, name, title, img }) => (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
        <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'> {content} </p>   
        <div className='flex flex-row'>
            <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full"/> 

        </div>
    </div>

  )

export default CardInfo