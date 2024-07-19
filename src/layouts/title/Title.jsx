import './title.scss'

function Title({text, colorPoint}) {

    return (
      <div className="title_container" >    
        <h2 className={`${colorPoint}`} >{text}</h2>
      </div>
    )
}

export default Title