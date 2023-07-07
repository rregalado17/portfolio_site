import React from 'react'
import styles from '../style'
import { rregalado } from '../assets'
import ContactButton from './ContactButton';
import { welcome } from '../constants'


const Welcome = ( ) =>  (

  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
  <div className='columns-2 w-full md:mt-0 mt-6'>
      <p className={`${styles.paragraph}`}> {welcome[0].content} </p><br/>
        <div className={`${styles.flexCenter}`}>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <img src={rregalado} alt='rregalado' className='w-[200px] h-[190px] bg-blue-gradient p-[2px] rounded-full' />
          </div>
          </div>
      </div>
    </section>
  )


export default Welcome