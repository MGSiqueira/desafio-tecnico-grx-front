import React, { useState } from "react";
import Question1n2 from "./Question1n2";
import Question3 from "./Question3";

const questionOne = 'Você se considera bom em lógica?';
const questionTwo = 'Gosta de aprender com desafios?';

export default function Form() {
  const [answers, setAnswers] = useState({ 1: '', 2: '', 3: 'Sim' });

  const handleClick = ({ target: { id, value }}) => {
    setAnswers({ ...answers, [id]: value })
  }

  return (
    <div>
      <Question1n2 number={ 1 } text={ questionOne } handle={ handleClick } answers={ answers } />
      <Question1n2 number={ 2 } text={ questionTwo } handle={ handleClick } answers={ answers } />
      <Question3 handle={ handleClick }/>
    </div>
  );
}