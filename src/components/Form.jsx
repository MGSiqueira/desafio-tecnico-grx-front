import React, { useState } from "react";
import Question1n2 from "./Question1n2";
import Question3 from "./Question3";
import Question4 from "./Question4";

const questionOne = 'Você se considera bom em lógica?';
const questionTwo = 'Gosta de aprender com desafios?';

export default function Form() {
  const [answers, setAnswers] = useState({ Pergunta1: '', Pergunta2: '',
    Pergunta3: 'Sim', Pergunta4: '' });

  const handle = (event) => {
    event.preventDefault();
    const { target: { id, value } } = event; 
    setAnswers({ ...answers, [id]: value });
  };

  return (
    <form>
      { console.log('teset') }
      <Question1n2 number={ 'Pergunta1' } text={ questionOne } handle={ handle } answers={ answers } />
      <Question1n2 number={ 'Pergunta2' } text={ questionTwo } handle={ handle } answers={ answers } />
      <Question3 handle={ handle }/>
      <Question4 text={ answers[4] } handle={ handle } />
      <button disabled={ true }>Enviar</button>
    </form>
  );
}