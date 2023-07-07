import styles from './style';
import { Outlet } from "react-router-dom"
import { Welcome, Bio, GitHubLanguages, Contact, Tech, Footer, Navbar, Projects, Techstack, Blog } from './components'

const App = () => (
  <div id='detail' className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Outlet />
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} {$styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Welcome />
        <Bio />
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