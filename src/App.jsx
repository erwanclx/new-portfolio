
import Navbar from './components/navbar/navbar'
import HeroSec from './components/hero/heroSec'
import Cursor from './animations/cursor/cursor'
import Projects from './components/projects'
import Contact from './components/contact/'
import Preload from './components/preload/preload'

function App() {

  return (
    <>
      <Preload />
      <Cursor />
      <Navbar />
      <HeroSec />
      <Projects />
      <Contact />
    </>
  )
}

export default App
