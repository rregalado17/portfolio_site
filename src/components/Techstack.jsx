import React from 'react'
import styles from '../style'
// import Button from './Button'

const Techstack = () =>  (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />  
      <h2 className={`${styles.heading2}`}>Techstack</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Here is a breakdown of the languages, 
      frameworks and libraries I use throughout my projects.</p>
  </section>
);


export default Techstack