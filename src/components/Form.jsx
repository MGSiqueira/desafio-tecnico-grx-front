import React, { useState } from "react";
import Questions1n2 from "./Questions1n2";

const questionOne = 'Você se considera bom em lógica?';
const questionTwo = 'Gosta de aprender com desafios?';

export default function Form() {
  const [answers, setAnswers] = useState({ one: '', two: '' });

  const handleClick = ({ target: { id, value }}) => {
    setAnswers({ ...answers, [id]: value })
  }

  return (
    <div>
      <Questions1n2 number='one' text={ questionOne } handle={ handleClick } answers={ answers } />
      <Questions1n2 number='two' text={ questionTwo } handle={ handleClick } answers={ answers } />
    </div>
  );
}