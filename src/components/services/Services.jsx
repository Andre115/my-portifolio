import "./services.scss"
import Card from "../../layouts/card/Card"
/*IMG imports*/
import math01 from "../../../public/imagens/matematic001.jpg"
import math02 from "../../../public/imagens/matematic002.jpg"
import dev01 from "../../../public/imagens/developer001.png"
import dev02 from "../../../public/imagens/developer002.jpg"

import Title from "../../layouts/title/Title"

/*ICONS*/
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import CodeSharpIcon from '@mui/icons-material/CodeSharp';


function Services() {
  return (
    <section className='services_container'>
        <div className="bg">

          <Title text={'Services'}/>
          
         <div className="cards">
          <Card
            img={math01}
            logo={<CalculateOutlinedIcon/>}
            title={'Math'}
            descricao={'Capacidade de aprender e de transmitir conhecimento de forma clara, objetiva e engajadora.'}
            
            />
          <Card
            img={dev02}
            logo={<CodeSharpIcon/>}
            title={'Developer'}
            descricao={'Criação de aplicações web responsivas e escaláveis do zero, utilizando tecnologias de front-end e back-end. '}
            
            />
         </div>
          
        </div>
    </section>
  )
}

export default Services