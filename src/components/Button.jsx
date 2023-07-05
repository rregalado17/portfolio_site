import React from 'react'

const Button = ( {youtube, github} ) => (
  <div className={`${styles.flexCenter} w-[120px] h-[50px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
          <a href={youtube} className='text-gradient'>Demo </a>
        </p>
      </div>
    </div>
  </div>
)

export default Button