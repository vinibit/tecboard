import "./button.estilos.css"

export function Button({ children }) {
    return (
        <button className="button">
            {children}
        </button>
    )
}