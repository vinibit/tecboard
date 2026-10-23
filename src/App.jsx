import './App.css'

import { useState } from 'react'
import { Banner } from './components/Banner'
import { Theme } from './components/Theme'
import { EventForm } from './components/EventForm'
import { EventCard } from './components/EventCard'

// No React, componentes são funções que retornam elementos JSX, que são uma extensão de JavaScript que permite escrever HTML dentro do JavaScript. 
// O JSX é transformado em chamadas de função JavaScript que criam os elementos React.

function App() {

	const themes = [
		{ id: 1, name: 'front-end' },
		{ id: 2, name: 'back-end' },
		{ id: 3, name: 'devops' },
		{ id: 4, name: 'inteligência artificial' },
		{ id: 5, name: 'data science' },
		{ id: 6, name: 'cloud' }
	]

	const [events, setEvents] = useState([
		{
			id: 1,
			cover: "1",			
			theme: themes[0],
			date: new Date(),
			title: 'Mulheres no Front'
		},
		{
			id: 2,
			cover: "2",
			theme: themes[1],
			date: new Date(),
			title: 'Summer Dev Hits'
		}
	]);	

	function addEvent(event) {
		
		setEvents(prevEvents => [...prevEvents, event]);
		console.log("Eventos => ", events);
	}

	return (
		<main>
			<header>
				<img src="logo.png" alt="Logo" />
			</header>
			<Banner />
			<EventForm 
				themes={themes} 
				onSubmit={addEvent} 
			/>
			<section className="container">
			{
				themes.map(theme => {

					if (!events.some(event => event.theme.id === theme.id)) {
						return null
					}

					return (
						<section key={theme.id}>
							<Theme theme={theme} />
							<div className="events">
								{events
									.filter(event => event.theme.id === theme.id)
									.map((event, index) => (
										<EventCard key={index} event={event} />
								))}
							</div>
						</section>				
					)
				})
			}
			</section>
		</main>
	)
}

export default App;
