import { Facebook, Instagram, Twitter } from "@mui/icons-material"
import "./cardTestimonial.scss"

function CardTestimonial({img, name, cargo, descript, star, linkWebsite, color}) {

  const socialIcons= {
    facebook: {icon: <Facebook/> }
  }

  return (
    <div className="cardTestimonial_container">
      <div className="cont_img">
        <img src={img} alt="" />
        <h3 className="name">{name}</h3>
      </div>

      <div className="cont_descript">
        <h4 className={`
          carg ${color==='green' || color==='blue' ? 
          color : 'red'}`}>
            <span></span>
            {cargo}
            </h4>
            
        <p>{descript}</p>
      </div>

      <div className="social">
        <Facebook/>
        <Twitter/>
         <Instagram/>
      </div>

        

    </div>
  )
}

export default CardTestimonial