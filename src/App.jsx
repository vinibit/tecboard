import './App.css'
import { EventForm } from './components/EventForm'

// No Raact, componentes são funções que retornam elementos JSX, que são uma extensão de JavaScript que permite escrever HTML dentro do JavaScript. 
// O JSX é transformado em chamadas de função JavaScript que criam os elementos React.

function App() {

	return (
		<main>
			<header>
				<img src="logo.png" alt="Logo" />
			</header>
			<section className="hero">
				<img src="banner.png" alt="Banner" />
			</section>
			<EventForm />
		</main>
	)
}

export default App
