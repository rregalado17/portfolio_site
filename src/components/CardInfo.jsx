import React from 'react'
import styles from '../style';

const CardInfo = ({ content, name, youtube, img, github }) => (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
        <img src={img} alt={name} className='ml-12 w-[180px] h-[150px]' />
        <p className='font-poppins font-normal text-[14px] leading-[32px] text-white my-10'> {content} </p>   
        <div className='flex flex-row '>
            <div className='flex flex-col ml-4'>
                <h4 className='font-poppins font-semibold text-[22px] leading-[32px] text-white mb-6'>{name}</h4>
                    <div className={`${styles.flexCenter} w-[120px] h-[50px] rounded-full bg-blue-gradient p-[2px] cursor-pointer mb-4`}>
                        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
                            <div className={`${styles.flexStart} flex-row`}>
                                <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
                                    <a href={youtube} className=' text-dimWhite hover:text-secondary'>Demo </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.flexCenter} w-[120px] h-[50px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
                        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
                            <div className={`${styles.flexStart} flex-row`}>
                                <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
                                    <a href={github} className=' text-dimWhite hover:text-secondary'>Repo </a>
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>

  )

export default CardInfo