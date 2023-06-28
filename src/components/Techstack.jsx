import React from 'react'
import styles from '../style'
// import Button from './Button'

const Techstack = () =>  (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className='flex-1 flex flex-col'>
      <h2 className={`${styles.heading2}`}>Techstack</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Here is a breakdown of the languages, frameworks and libraries I use throughout my projects.</p>
    </div>
  </section>
  )


export default Techstack