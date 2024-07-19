import "./home.scss"
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from "../../layouts/button/Button"; 
import imghome from "../../../public/imagens/jerry004.png"

function Home() {
  return (
    <section className={'container_home'}>
        <div className="bg">
            <div className="left_section">
                <h3>Hello</h3>
                <h1>I'm <span>André Yamba</span></h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minima nostrum similique assumenda, natus sit expedita.
                </p>
            <Button text={'Hire me'}/>
                
                <div className="social">
                    <GitHubIcon/>
                    <InstagramIcon/>
                    <LinkedInIcon/>
                    <FacebookTwoToneIcon/>
                </div>
            </div>




            <div className="right_section">
                <div className="area_img">
                    <img src={imghome} alt="" />
                    <span></span>
                </div>


            </div>
        </div>


    </section>
  )
}

export default Home