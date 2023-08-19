import { somaHorasExtras } from '../index';

describe('Testes da folha de pagamentos', () => {
  it('Deve retornar a soma das horas extras', () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);

    expect(retornado).toBe(esperado);
  });
});

// testes de cobertura:
// Stmts - "statements" ou atribuições feitas
// Branch - bifuracações no programa como laços e condicionais
// Funcs - funções que o teste abrange
// Lines - linhas cobertas
