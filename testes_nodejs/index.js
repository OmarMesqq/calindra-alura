const somaHorasExtras = (salario, valorHorasExtra) => {
if (!salario || !valorHorasExtra) {
throw new Error('Sem argumentos')
}
return salario + valorHorasExtra;}

export {
  somaHorasExtras,
};
