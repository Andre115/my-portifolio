import Button from "../../layouts/button/Button"
import Img_jerry from "../../../public/imagens/jerry002.png"
import "./about.scss"

import Title from "../../layouts/title/Title"

function About() {
  return (
    <section className='about_container'>
        <div className="bg">
           <div className="left_section">
            <div className="area_img">
                <img src={Img_jerry}  alt="Yamba" />
            </div>

           </div>

           <div className="right_section">

            <Title text={'About me'} colorPoint={'primary'}/>
            <div className="descrition">
              <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates aliquam, explicabo libero beatae maxime laborum obcaecatitiae 
              </p>
              <div className="list">
                <ul>
                  <li>Name</li>

                  <li>E-mail</li>
           
                  <li>Phone</li>             
               
                  <li>Date of birth</li>             
               
                  <li>Nationality</li>
      
                  <li>Location</li>
                </ul>
               
                <ul>
                  <li>André Yamba</li>
          
                  <li>andrembaj@gmail.com</li>
             
                  <li>+244 933650062</li>
                  
                  <li>05 Feb 1997</li>
           
                  <li>Angolan</li>

                  <li>Camama 1, Luanda</li>
                </ul>
              </div>

            </div>

            <div className="btn_area">
              <Button bg={'bg_secundary'} text={'Hire me'} />
              <Button  text={'Dowload CV'}/>
            </div>

           </div>
        </div>

    </section>
  )
}

export default About