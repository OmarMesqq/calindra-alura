// Funções async retornam uma Promise
async function buscaEndereco() {
	try { 
		// await pausa a execução da função até que a Promise seja resolvida
		var consultaCEP = await fetch('https://viacep.com.br/ws/01001000/json/');
		var consultaCEPConvertida = await consultaCEP.json();
		// Lançamos erro após a conversão da resposta para JSON, porque 
		// a chave "erro" e seu valor "true" só existem aparecem nessa etapa
		if (consultaCEPConvertida.erro) {
			throw Error('Esse CEP não existe')
		}
		console.log(consultaCEPConvertida);
	} 
	catch(erro) { 
		console.log(erro);
	}
	
}

buscaEndereco();
