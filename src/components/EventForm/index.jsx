import "./event-form.estilos.css";

import { FormField } from "../FormField";
import { FormInput } from "../FormInput";
import { FormLabel } from "../FormLabel";
import { FormTitle } from "../FormTitle";
import { Button } from "../Button";
import { DropdownList } from "../DropdownList";

export function EventForm() {
	
	return (
		<form className="event-form">
			<FormTitle>
				Preencha para criar um evento:
			</FormTitle>
			<div className="fields">
				<FormField>
					<FormLabel forEl="nome">
						Nome do evento:
					</FormLabel>
					<FormInput id="nome" type="text" placeholder="Digite o nome do evento" />
				</FormField>
				<FormField>
					<FormLabel forEl="dataEvento">
						Data do evento
					</FormLabel>
					<FormInput id="dataEvento" type="text" placeholder="XX/XX/XXXX" />				
				</FormField>
				<FormField>
					<FormLabel forEl="temaEvento">
						Tema do evento
					</FormLabel>
					<DropdownList></DropdownList>
				</FormField>
			</div>
			<div className="acoes">
				<Button>
					Criar evento
				</Button>
			</div>
		</form>
	)
}