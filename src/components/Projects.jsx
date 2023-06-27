import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import CardInfo from './CardInfo'


const Projects = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div></div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>Here are a list of my projects <br className='sm:block hidden'/>using various different technologies!</h1>
    </div>
  </section>
)
export default Projects