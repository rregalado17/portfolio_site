import React from 'react'
import styles from '../style'
import { rrdev_logo, github } from '../assets'
import { footerLinks, socialMedia, clients } from '../constants'

const Contact = () => (
  <div className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} w-[900px] h-[410px] sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex-[2] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10' key="1">
        {footerLinks.map((footerLink) => (
        <div key={footerLink.key} className='flex flex-col ss:my-0 my-04 min-w-[150px]'>
          <h4 className='font-poppins font-medium text-[25px] leading-[27px] text-white mt-12'>{footerLink.title}</h4><br/>
          <ul>
            {footerLink.links.map((link, index) => (
              <li key={link.id} className='font-poppins font-normal text-[18px] ml-6 mb-4 relative z-[1]'>
                <img src={link.icon} alt="icon" className="w-[30px] h-[30px] ml-5"/> 
                <div className='font-poppins font-normal text-[18px] leading-[32px]  text-dimWhite hover:text-secondary cursor-pointer'>
                  <a href={link.link}>{link.name}</a>
                </div> 
              </li>
            ))}
          </ul>
        </div>
        ))}
      </div>
      <div className='flex-1.5  justify-center ml-10 mt-12'>
        <img 
          src={rrdev_logo}
          alt='logo'
          className='w-[366px] h-[172px] object-contain'/>
          <p className={`${styles.paragraph} mt-4 max-w-[500px]`}>Feel free to contact me using the following links!</p>
      </div>
    </div>
  </section>
  </div>
)

export default Contact 