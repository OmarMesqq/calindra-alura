var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
	.then(resposta => resposta.json())
	.then(r => {
		if (r.erro) {
			// As formas de lidar com eventuais erros variam de acordo com a API utilizada 
			// No caso do ViaCEP, CEPs inexistentes geram uma resposta com o parâmetro erro=true
			// Por isso, o utilizamos aqui para customizar a msg de erro
			throw Error('Esse CEP não existe')
		}
		else { 
			// Aqui deu tudo certo
			console.log(r)
		}
	})
	// Os demais erros relacionados com CEPs inseridos (espaço entre dígitos, 
	// alfanuméricos, qtd de dígitos errada,...) são respondidos com um erro 
	// HTTP 400 Bad Request, então o catch já pega essa exceção  
	.catch(erro => console.log(erro))
	// Esse método é executado independentemente do tipo de resposta da Promise: 
	// Com a API retornando "resolved" ou "rejected", a mensagem do finally será mostrada
	.finally(mensagem => console.log('Processamento concluído'));

console.log(consultaCEP);

/* 
Nesse código, fizemos uso de arrow functions do JavaScript. Elas são 
um jeito mais conciso de escrever funções e utilizam o operador => 

Seu  contexto é sempre o contexto no qual foi declarada, ou seja, 
ela não tem contexto próprio. 

Em outras palavras, o seu .this irá retornar o contexto de uma função 
caso tenha sido declarada aninhada dentro de outra ou o escopo global
caso tenha sido aplicada fora de outra função
*/
