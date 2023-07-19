import styles from './style';
import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom"
import { Welcome, Contact, Footer, Navbar, Projects, Techstack, Blog } from './components'

const App = () => (
  <div id='detail' className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Outlet />
        <Navbar />
      </div>
    </div>

    <div className="bg-primary flex justify-center ">
      <div className={`${styles.boxWidth}`}>
        <Welcome />
        <Projects />
        <Blog />
        <Techstack username= "rregalado17"/>
        <Contact />
        <Footer />
      </div>
    </div>
  </div>
)

export default App