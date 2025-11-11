import React from 'react';

function reduces (state, action) {
  switch (action) {
    case 'SOMAR':
      return state + 1;
    case 'SUBTRAIR':
      return state - 1;
    case 'DIVIDIR':
      return state / 2;
    case 'MULTIPLICAR':
      return state * 2;
    case 'ZERAR':
      return 0;
    case 'SOMAR10':
      return state + 10;
    case 'SUBTRAIR10':
      return state - 10;
    default:
      return new Error('Erro action nao existe');
  }
}

function Contador() {
  const [state, dispatch] = React.useReducer(reduces, 0);

  return (
    <div>
      <button onClick={() => dispatch('SOMAR')}>Somar</button>
      <button onClick={() => dispatch('SUBTRAIR')}>Subtrair</button>
      <button onClick={() => dispatch('DIVIDIR')}>Dividir</button>
      <button onClick={() => dispatch('MULTIPLICAR')}>Multiplicar</button>
      <button onClick={() => dispatch('SOMAR10')}>Somar 10</button>
      <button onClick={() => dispatch('SUBTRAIR10')}>Subtrair 10</button>
      <button onClick={() => dispatch('ZERAR')}>Zerar</button>
      <br /><br />

      <p>Resultado: {state}</p>
    </div>
  );
}

export default Contador;