import styles from './style';
import { Welcome, Bio, GitHubLanguages, Contact, Tech, Footer, Navbar, Projects, Techstack, Blog } from './components'


const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Hero
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} {$styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Welcome />
          <Bio />
          <Projects />
          <Blog />
          <GitHubLanguages username= "rregalado17"/>
          {/* <Contact /> */}
          <Footer />
        </div>
      </div>
    </div>
  )

export default App