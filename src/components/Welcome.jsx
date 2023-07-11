import React, { useRef } from 'react'
import styles from '../style'
import { rregalado, profile, profile_pic } from '../assets'
import { welcome } from '../constants'


const Welcome = ( ) =>  {
  
  const titleRef = useRef()

  function handleBackClick() {
    titleRef.current.scrollIntoView({ behavior: 'smooth'})
  }

  return (
  <section id="clients" className={`${styles.padding} flex-col relative`}>
    <div ref={titleRef} className='columns-2 w-full md:mt-0 mt-6'>
      <p className={`${styles.paragraph}`}> {welcome[0].content} </p><br/>
        <div className={`${styles.flexCenter}`}>
          <div className='ss:flex hidden md:mr-4 mr-0'>
              <img src={profile_pic} alt='rregalado' className='w-[250px] h-[270px] bg-blue-gradient p-[2px] rounded-full' />
          </div>
        </div>
      </div>
      <button onClick={handleBackClick}>Click me</button>
    </section>
  )
}

export default Welcome