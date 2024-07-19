import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close';;
import './navbar.scss'

function Navbar() {

  const [showIcon, setShowIcon]= useState(false);

  const alterBtnIcon= ()=>{
    setShowIcon(!showIcon)
  }


  return (
    <header className='header_container'>
      <div className="logo">Y<span className="letter-b">B</span> <span className='point'></span></div>
      <nav className='nav-retrat'>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Testemun</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      {!showIcon ? (
        <div className='teste' onClick={alterBtnIcon}><MenuIcon /></div>

      ):(   
        <div>
        
        <div onClick={alterBtnIcon}><CloseIcon/></div>
        <nav className='nav-mobile'>
        <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Testemun</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        
        </div>
      )

      }
      

    </header>
  )
}

export default Navbar;