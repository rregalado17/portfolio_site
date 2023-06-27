import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import CardInfo from './CardInfo'


const Projects = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div></div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>Here are a list of my projects <br className='sm:block hidden'/>using various different technologies!</h1>
      <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>These are just a small selection of the projects I've built or worked on. To browse 
        the full list of projects and the various technologies I have used, please check out my github at https://github.com/rregalado17.</p>
      </div>
    </div>
  <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
    {feedback.map((card) => (
      <CardInfo key={card.id} {...card} />
    ))}

  </div>
  </section>
)
export default Projects