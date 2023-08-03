// Funções async retornam uma Promise
async function buscaEndereco(cep) {
	var mensagemErro = document.getElementById('erro');
	try { 
		// await pausa a execução da função até que a Promise seja resolvida
		var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
		var consultaCEPConvertida = await consultaCEP.json();
		// Lançamos erro após a conversão da resposta para JSON, porque 
		// a chave "erro" e seu valor "true" só existem aparecem nessa etapa
		if (consultaCEPConvertida.erro) {
			throw Error('Esse CEP não existe')
		}
		var cidade = document.getElementById('cidade');
		
		// Atribui ao valor do elemento cidade a chave "localidade" no JSON vindo da API
		cidade.value = consultaCEPConvertida.localidade;

		console.debug(consultaCEPConvertida);
		return consultaCEPConvertida;
	} 
	catch(erro) { 
		mensagemErro.innerHTML = `<p>CEP Inválido</p>`;
		console.error(erro);
	}
}

//let mockCEPs = ['01001000','01001001'];
//let mockDadosDosCEPs = mockCEPs.map(valores => buscaEndereco(valores));

// Fazer um syntax sugar com try/catch ou async/await aqui 
// Porém, o último método processa Promises sequencialmente 
// enquanto .then() paralelamente, sendo mais rápido
//Promise.all(mockDadosDosCEPs).then(respostas => console.log(respostas));

var cep = document.getElementById('cep');	// id da div q o user entra com CEP 
// Trigga a mudança do campo do CEP quando o user clica fora da caixa
cep.addEventListener("focusout", () => buscaEndereco(cep.value));


/* Heurísticas de Nielsen aplicadas:
 * - Prevenção de erro: autopreenchimento dos campos de rua, UF, etc 
 * - Reconhecimento de erro: mensagens claras e próximas de onde o erro ocorreu
 */
