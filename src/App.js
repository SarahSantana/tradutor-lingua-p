import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      consoantes: [],
      vogais: [],
      frase: String,
      palavras: [],
      silabas: [],
      letras: []
    };

    // inicia valores do state
    this.init();
  }

  init() {
    // define letras
    this.state.consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z'];
    this.state.vogais = ['a', 'e', 'i', 'o', 'u'];
    // frase que o usuario digitara
    this.state.frase = 'Sarah Santana Pereira';
    // inicia array com as palavras da frase
    this.state.palavras = [];
    // inicia array de silabas (guardara silabas de cada palavra)
    this.state.silabas = [];
    // inicia array de letras (guardara array de letras de cada palavra)
    this.state.letras = [];

    // separa as silabas das palavras da frase
    this.encontraSilabas();
  }

  encontraSilabas() {
    this.state.palavras = this.separaPalavras();

    this.state.palavras.forEach((palavra, indexPalavra) => {
      // separa a palavra em letras
      this.state.letras[indexPalavra] = palavra.split('');

      const primeiraLetraSilaba = this.state.letras[indexPalavra][0];
      const primeiraIsConsoante = this.isConsoante(primeiraLetraSilaba);
      const primeiraIsVogal = this.isVogal(primeiraLetraSilaba);
      // sa-rah

      // percorre cada letra da palavra a partir da segunda letra
      for(let indexLetra = 1; indexLetra < this.state.letras[indexPalavra].length; indexLetra++) {
        // guarda letra correspondente ao indice dentro da palavra
        let letra = this.state.letras[indexPalavra][indexLetra];

        // verifica se a letra e consoante
        let letraIsConsoante = this.isConsoante(letra);
        // verifica se a letra e vogal
        let letraIsVogal = this.isVogal(letra);

        if (letraIsConsoante && primeiraIsConsoante) {
          // as duas formam uma silaba
          // troca a primeiraLetraSilaba (adicionar um for nas letras da palavra cada
          // vez que formar uma silaba passa para a proxima letra depois da ultima letra
          // da silaba que se formou)
        } else if (letraIsVogal && primeiraIsConsoante) {
          // as duas podem ou nao formar uma silaba
          // guarda essa letra numa variavel (letraPendente)
          // para testar se a proxima letra é uma consoante ou vogal
          // se a proxima for vogal, entao essas duas formam uma silaba 
          // se a proxima for uma consoante,
          // testar se ainda tem letras nessa palavra, se nao tiver mais letras entao essas duas 
          // formam uma silaba 

          // testar se essa vogal e a primeira letra da palavra se for entao 
          // deixa pendente essa letra e testa se a proxima e uma vogal tbm
          // se a proxima for uma vogal tbm entao essa primeira letra vogal
          // forma uma silaba sozinha
          //
        }
      }

    });
  }

  separaPalavras() {
    this.state.frase = this.state.frase.toLowerCase();
    return this.state.frase.split(' ');
  }

  isConsoante(letra) {
    return !!(this.state.consoantes.find((consoante) => consoante === letra));
  }

  isVogal(letra) {
    return !!(this.state.vogais.find((vogal) => vogal === letra));
  }

  render() {
    return (
      <div className="App">
        <h1>React é legal</h1>
        {this.state.palavras.map(palavra => 
          <p>{palavra}</p>
        )}
      </div>
    );
  }
}

export default App;
