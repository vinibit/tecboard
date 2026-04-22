import './theme.estilos.css'

export function Theme({ theme }) {

    return (
        <h3 className='titulo-tema'>
            {theme.name}
        </h3>
    )
}