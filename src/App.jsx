import './App.css'
import { Banner } from './components/Banner'
import { Theme } from './components/Theme'
import { EventForm } from './components/EventForm'
import { EventCard } from './components/EventCard'

// No Raact, componentes são funções que retornam elementos JSX, que são uma extensão de JavaScript que permite escrever HTML dentro do JavaScript. 
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

	const events = [
		{
			id: 1,			
			theme: themes[0],
			date: new Date(),
			title: 'Mulheres no Front'
		},
		{
			id: 2,
			theme: themes[0],
			date: new Date(),
			title: 'Mulheres no Front'
		}
	]

	return (
		<main>
			<header>
				<img src="logo.png" alt="Logo" />
			</header>
			<Banner />
			<EventForm />
			{
				themes.map(function (theme) {
					return (
						<section key={theme.id}>
							<Theme theme={theme} />
							<EventCard event={events[1]} />
						</section>
					)
				})
			}
		</main>
	)
}

export default App
