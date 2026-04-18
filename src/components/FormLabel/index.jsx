import "./form-label.estilos.css";

export function FormLabel({ children, forEl }) {
	return (
		<label htmlFor={forEl}>
			{children}
		</label>
	)
}