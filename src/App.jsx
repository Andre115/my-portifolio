import Home from './components/home/Home'
import './App.css'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Services from './components/services/Services'


function App() {

  return (
    <>
      <div>
       <Navbar/>
       <Home/>
       <About/>
       <Services/>
        
      </div>
    
    </>
  )
}

export default App
