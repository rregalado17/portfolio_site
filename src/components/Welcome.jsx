import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import ContactButton from './ContactButton';
import { welcome } from '../constants'


const Welcome = ( ) =>  (

  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
  <div className="absolute z-[0] w-[60%] h-[60%] -top-[50%] rounded-full blue__gradient" />  
  <div className='columns-2 w-full md:mt-0 mt-6'>
      <p className={`${styles.paragraph}`}> {welcome[0].content} </p><br/>
        <div className={`${styles.flexCenter}`}>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <ContactButton />
          </div>
          </div>
      </div>

    </section>
  )


export default Welcome