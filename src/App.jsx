import Home from './components/home/Home'
import './App.css'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'
import Testimonial from './components/testimonial/Testimonial'


function App() {

  return (
    <>
      <div>
       <Navbar/>
       <Home/>
       <About/>
       <Services/>
       <Skills/>
       <Testimonial/>
        
      </div>
    
    </>
  )
}

export default App
