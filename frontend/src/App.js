import React from 'react';
import './global.css';
import Routes from './routes';

//JSX (Javascript + XML) html integrado dentro do js

function App() { //Função que retorna html
  //useState retorna um array de duas posições, 1º valor da variavel, 2º função de atualização(incremento)

  return (
    //<Header title="Semana OmniStack"/> title = propriedade
    <Routes />
  );
}

export default App;
