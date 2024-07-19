import './button.scss'

function Button({bg, text}) {
  
  return (
    <div className={`button_container`}>
        <button className={`${bg}`} >{text}</button>

    </div>
  )
}

export default Button