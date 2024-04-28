import "../Styles/ButtonStyles.css"

const Button = ({onClick, text, style}) => { 
    return (
        <button
            className="header-action"
            onClick={(e) => {
                if (onClick !== null && onClick !== undefined) {
                    e.preventDefault()
                    onClick(e);
                }
            }}
            style={{...style}}
        ><span className="button-text">{ text}</span></button>
    )
}

export default Button;