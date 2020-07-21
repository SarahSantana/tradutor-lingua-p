import React from 'react';
import './App.css';

let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z'];
let vogais = ['a', 'e', 'i', 'o', 'u'];

function isConsoante(letra) {
  return !!(consoantes.find((consoante) => consoante === letra));
}

function isVogal(letra) {
  return !!(vogais.find((vogal) => vogal === letra));
}

function App() {

  let palavra = 'Sarah Santana Pereira';
  palavra = palavra.toLowerCase();
  let palavras = palavra.split(' ');

  let silabas = [];
  let letras = [];

  palavras.forEach((palavra, indexPalavra) => {
    letras[indexPalavra] = palavra.split('');
    console.log('letras[indexPalavra]', letras[indexPalavra]);
    
    letras[indexPalavra].forEach((letra, indexLetra) => {
      if (this.isConsoante(letra)) {
        if (this.isVogal(letras[indexPalavra][indexLetra + 1])) {
          
        }

      } else if (this.isVogal(letra)) {
        if (indexLetra === 0) {
          silabas[indexPalavra] = 'pe'+letra;
          return;
        }
      }
    })
  });

  return (
    <div className="App">
      <header className="App-header">
        {silabas[0]}
      </header>
    </div>
  );
}

export default App;
