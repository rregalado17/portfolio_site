import React from 'react'
import { projects, projDescription } from '../constants'
import styles from '../style'
import CardInfo from './CardInfo' 


const Projects = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={`${styles.heading2}`}>Here are a list of my projects  <br className='sm:block hidden'/> using various different technologies!</h1>
        <div className='w-full md:mt-0 mt-6'> 
          <p className={`${styles.paragraph} text-left max-w-[700px]`}>{projDescription[0].content}</p>
        </div>
      </div>
    <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
      {projects.map((card) => (
        <CardInfo key={card.id} {...card} />
      ))}
    </div>
  </section>
)
export default Projects