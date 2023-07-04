import React from 'react'
import styles from '../style'
import { rrdev_logo, github } from '../assets'
import { footerLinks, socialMedia, clients } from '../constants'

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      
      <div className='flex-1 flex flex-col justify-start mr-10'>
        <img 
          src={rrdev_logo}
          alt='rregaladodev'
          className='w-[266px] h-[72px] object-contain'
        />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>Feel free to contact me using the following links!</p>
      </div>

      {/* <div className={`${styles.flexCenter} flex-wrap w-full`} >
        {clients.map((client) => (
          <div key={client.id}>
            <img src={client.logo} alit="client" className="sm:w-[192px] w-[100px] object-contain"/> 
          </div>
        ))}
      </div> */}

    
      <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 '>
        {footerLinks.map((footerLink) => (
        <div key={footerLink.key} className='flex flex-col ss:my-0 my-04 min-w-[150px]'>
          <h4 className='font-poppins font-medium text-[20px] leading-[27px] text-white'>{footerLink.title}</h4><br/>
          <ul>
            {footerLink.links.map((link, index) => (
              <li 
                key={link.name}
                className={`font-poppins font-normal text-[18px] text-dimWhite hover:text-secondary cursor-pointer`}
              ><img 
                  key={link.name}
                  src={link.icon} 
                  alt="icon" 
                  className="w-[30px] h-[30px] object-contain"/> {link.name}</li>
            ))}
          </ul>
        </div>
        ))}
      </div>
    </div>
  </section>
)

export default Footer