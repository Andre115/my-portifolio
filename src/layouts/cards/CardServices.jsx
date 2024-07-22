import "./cardServices.scss"

function Card({img, logo, title, descricao}) {
  return (

    <div className="cardServices_container">
        <img src={img} alt="" />
        <div className="bgcard">
            
            <div className="logo">
                {logo}
            </div>
            <div className="descripts">
                <h3>{title}</h3>
                  <span>"</span>
                    <p>
                      {descricao}
                    </p>
                <span>"</span>
            </div>
        </div>
    </div>
  )
}

export default Card