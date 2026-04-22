import './event-card.estilos.css'

export function EventCard({ event }) {
    return (
        <div>
            <img 
                src={`https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_${event.id}.png`} 
                alt={event.title} 
            />
            <div className="body">
                <p className="tag">
                    {event.theme.name}
                </p>
                <p>
                    {event.date.toLocaleDateString('pt-BR')}
                </p>
                <h4 className='title'>
                    {event.title}
                </h4>
            </div>
        </div>
    )
}