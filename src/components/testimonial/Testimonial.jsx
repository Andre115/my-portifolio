import CardTestimonial from "../../layouts/cards/CardTestimonial"
import "./testimonial.scss"

import Title from "../../layouts/title/Title"

import dev01 from "../../../public/imagens/developer001.png"
import dev02 from "../../../public/imagens/developer002.jpg"

function Testimonial() {
  return (

    <section className="testimonial_container">
        <div className="bg">
            <Title text={'Testimonial'}/>

            <div className="testimonials">

                <CardTestimonial img={dev02}
                    name={'Osvaldo Silva'}
                    cargo={'Programador web'}
                    descript={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                    color={'blue'}
                    
                    />
                <CardTestimonial
                    img={dev01}
                    name={'António Kizaid'}
                    cargo={'SEO/CO-Founder'}
                    descript={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                    
                    />
                <CardTestimonial
                    img={dev01}
                    name={'Hélio Brás'}
                    cargo={'Dev Full-Stack'}
                    descript={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                    color={'green'}
                    
                    />

            </div>

        </div>

    </section>
  )
}

export default Testimonial