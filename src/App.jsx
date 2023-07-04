import styles from './style';
import { Welcome, Bio, GitHubLanguages, Contact, Tech, Footer, Navbar, Projects, Techstack, Blog } from './components'

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} {$styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Welcome />
        <Bio />
        <Projects />
        <Blog />
        {/* <Contact /> */}
        <GitHubLanguages username= "rregalado17"/>
        <Footer />
      </div>
    </div>
  </div>
)

export default App