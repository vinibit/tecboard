import "./dropdown-list.estilos.css"

export function DropdownList({ itens, ...rest }) {

    return (
        <select className="dropdown-list" defaultValue="" {...rest}>
            <option value="" disabled>
                Selecione uma opção
            </option>
            {itens.map(theme => (
                <option 
                    key={theme.id} 
                    value={theme.id}>
                        {theme.name}
                </option>
            ))}
        </select>
    )
}