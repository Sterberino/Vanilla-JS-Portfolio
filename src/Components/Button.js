import "../Styles/ButtonStyles.css"

const Button = ({onClick, text, style}) => { 
    return (
        <button
            className="header-action"
            onClick={() => {
                if (onClick !== null && onClick !== undefined) {
                    onClick();
                }
            }}
            style={{...style}}
        ><span className="button-text">{ text}</span></button>
    )
}

export default Button;