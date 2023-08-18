const somaHorasExtra = (salario, valorHorasExtra) => salario + valorHorasExtra;

// Próprio método de asserção
const verifiqueSe = (valor) => {
  const assercoes = {
    ehExatamenteIgualA(esperado) {
      if (valor !== esperado) {
        throw new Error('Erro lançado!');
      }
    },
  };
  return assercoes;
};

const teste = (nomeTeste, funcaoDeTeste) => {
  try {
    funcaoDeTeste();
    console.log(`✅ ${nomeTeste} passou!`);
  }
  catch (error) {
    console.error(`❌ ${nomeTeste} falhou!`);
    console.error(error);
  }
}

teste('Teste de soma de horas extra', () => {
  const salario = 1000;
  const valorHorasExtra = 100;
  const esperado = 1100;
  const resultado = somaHorasExtra(salario, valorHorasExtra);

  verifiqueSe(resultado).ehExatamenteIgualA(esperado);
})

// Usando o módulo assert do Node.js
// Não requer dependências externas no backend
import assert from 'node:assert/strict';

const verifiqueSe2 = (valor) => {
  const assercoes = {
    ehExatamenteIgualA(esperado) {
      assert.strictEqual(valor, esperado);
    },
  };
  return assercoes;
};