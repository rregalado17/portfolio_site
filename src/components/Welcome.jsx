import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import Contact from './Contact';
import { welcome } from '../constants'


const Welcome = ( ) =>  (
    <section id="home" className={`flex md:flex-row flec-col ${styles.paddingY}`}>
      <p className={`${styles.paragraph}`}> {welcome[0].content} </p>
      <div className=' flex-col xl:px-0 sm:px-16 px-6'>
        <div className='ss:flex hidden md:mr-4 mr-0'>
            <Contact />
          </div>
      </div>
    </section>
  )


export default Welcome