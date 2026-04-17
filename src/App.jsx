import './App.css'

// No Raact, componentes são funções que retornam elementos JSX, que são uma extensão de JavaScript que permite escrever HTML dentro do JavaScript. 
// O JSX é transformado em chamadas de função JavaScript que criam os elementos React.

function EventForm() {
	
	return (
		<form className="event-form">			
			<fieldset>
				<label htmlFor="">
					Qual o nome do evento?
				</label>
				<input type="text" />
				<label htmlFor="">
					Data do evento
				</label>
				<input type="text" />
				<label htmlFor="">
					Tema do evento
				</label>
				<input type="text" />
			</fieldset>
		</form>
	)
}

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
