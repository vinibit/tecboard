import './event-card.estilos.css'

export function EventCard({ event }) {
    return (
        <div className="event-card">
            <img 
                src={`https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_${event.cover}.png`} 
                alt={event.title} 
            />
            <div className="body">
                <p className="tag">
                    {event.theme.name}
                </p>
                <p className="date">
                    {event.date.toLocaleDateString('pt-BR')}
                </p>
                <h4 className='title'>
                    {event.title}
                </h4>
            </div>
        </div>
    )
}