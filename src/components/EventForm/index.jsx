import "./event-form.estilos.css";

import { FormField } from "../FormField";
import { FormInput } from "../FormInput";
import { FormLabel } from "../FormLabel";
import { FormTitle } from "../FormTitle";
import { Button } from "../Button";
import { DropdownList } from "../DropdownList";

function toBrazilianDate(date) {
	
	const dateObj = new Date(date + 'T00:00:00');
	return dateObj;
}

export function EventForm({ themes, onSubmit }) {
	
	function onSubmited(formData) {
		
		console.log("Olá, vamos criar um novo evento!", formData);		

		const event = {			
			cover: formData.get('cover'),			
			theme: themes.find(theme => theme.id == formData.get('theme')),
			date: toBrazilianDate(formData.get('date')),
			title: formData.get('title')
		};

		onSubmit(event);
	}

	return (
		<form className="event-form" action={onSubmited}>
			<FormTitle>
				Preencha para criar um evento:
			</FormTitle>
			<div className="fields">
				<FormField>
					<FormLabel forEl="nome">
						Qual o nome do evento?
					</FormLabel>
					<FormInput type="text" id="title" name="title" placeholder="Nome do evento" />
				</FormField>
				<FormField>
					<FormLabel forEl="capa">
						Qual o número da imagem de capa?
					</FormLabel>
					<FormInput type="number" id="cover" name="cover" placeholder="1-15" />
				</FormField>
				<FormField>
					<FormLabel forEl="dataEvento">
						Qual a data do evento?
					</FormLabel>
					<FormInput type="date" id="dataEvento" name="date" placeholder="XX/XX/XXXX" />				
				</FormField>
				<FormField>
					<FormLabel htmlFor="temaEvento" forEl="temaEvento">
						Qual o tema do evento?
					</FormLabel>
					<DropdownList 
						id="theme" 
						name="theme" 
						itens={themes}/>
				</FormField>
			</div>
			<div className="actions">
				<Button>
					Criar evento
				</Button>
			</div>
		</form>
	)
}