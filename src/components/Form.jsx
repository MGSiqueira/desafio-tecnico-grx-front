import React, { useState, useEffect } from "react";
import api from "../helper/api";
import Question1n2 from "./Question1n2";
import Question3 from "./Question3";
import Question4 from "./Question4";
import './css/Form.css';

const questionOne = 'Você se considera bom em lógica?';
const questionTwo = 'Gosta de aprender com desafios?';

export default function Form() {
  const [answers, setAnswers] = useState({ Pergunta1: '', Pergunta2: '',
    Pergunta3: 'Sim', Pergunta4: '' });
  const [disabled, setDisabled] = useState(true);

  const handle = (event) => {
    event.preventDefault();
    const { target: { id, value } } = event; 
    setAnswers({ ...answers, [id]: value });
  };

  const validateForm = () => {
    const { Pergunta1, Pergunta2, Pergunta4 } = answers;
    if (Pergunta1 == '' || Pergunta2 == '') return setDisabled(true);
    if (Pergunta4.length < 15 || Pergunta4.length > 200) return setDisabled(true);
    setDisabled(false);
  };

  const submitForm = () => {
    api.post('/answers', answers);
  };

  useEffect(() => { validateForm(); }, [answers]);

  return (
    <form>
      <Question1n2 number={ 'Pergunta1' } text={ questionOne } handle={ handle } answers={ answers } />
      <Question1n2 number={ 'Pergunta2' } text={ questionTwo } handle={ handle } answers={ answers } />
      <Question3 handle={ handle }/>
      <Question4 text={ answers[4] } handle={ handle } />
      <button disabled={ disabled } onClick={ submitForm }>Enviar</button>
    </form>
  );
}