import axios from 'axios'
import { FormEvent } from 'react'
// const BASE_URL = import.meta.env.VITE_BASE_API_URL

function NewTransaction() {
	function handleSubmit(event: FormEvent) {
		event.preventDefault()

		const transacao = {
			remetente: event.target['remetente'].value,
			destinatario: event.target['destinatario'].value,
			formato: event.target['formato'].value,
			valor: parseFloat(event.target['valor'].value),
		}

		axios.post(`http://localhost:3000/transacoes`, transacao, {
			headers: {
				'Content-Type': 'application/json',
			},
		})

    alert("Envio concluido")
	}
	return (
		<>
			<a href="/">Voltar</a>
			<h1>Nova transação</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="remetente">Rementente</label>
				<input type="text" name="remetente" id="remetente" required />

				<br />

				<label htmlFor="destinatario">Destinatário</label>
				<input type="text" name="destinatario" id="destinatario" required />

				<br />

				<label htmlFor="formato">Formato</label>
				<input type="text" name="formato" id="formato" />

				<br />

				<label htmlFor="valor">Valor</label>
				<input type="number" name="valor" id="valor" min="0" required />

				<br />

				<button type="reset">Limpar formulário</button>
				<button type="submit">Enviar</button>
			</form>
		</>
	)
}

export default NewTransaction
