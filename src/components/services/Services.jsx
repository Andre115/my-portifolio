import "./services.scss"
import Card from "../../layouts/card/Card"
/*IMG imports*/
import math01 from "../../../public/imagens/matematic001.jpg"
import math02 from "../../../public/imagens/matematic002.jpg"
import dev01 from "../../../public/imagens/developer001.png"
import dev02 from "../../../public/imagens/developer002.jpg"

/*ICONS*/
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';


function Services() {
  return (
    <section className='services_container'>
        <div className="bg">

          <h2>Services</h2>
          
         <div className="cards">
          <Card
            img={math01}
            logo={<CalculateOutlinedIcon/>}
            title={'Math'}
            descricao={'Capacidade de aprender e de transmitir conhecimento de forma clara, objetiva e engajadora.'}
            
            />
          <Card
            img={math01}
            logo={<CalculateOutlinedIcon/>}
            title={'Math'}
            descricao={'Capacidade de aprender e de transmitir conhecimento de forma clara, objetiva e engajadora.'}
            
            />
         </div>
          
        </div>
    </section>
  )
}

export default Services