import React, { useState } from "react";

export default function Question4({ text, handle }) {
  const [wordCount, setWordCount] = useState(0);
  const [countColor, setCountColor] = useState('red');

  const handleChange = (event) => {
    handle(event);
    setWordCount(event.target.value.length);
    validateLength(event.target.value);
  };

  const validateLength = (text) => {
    if (text.length < 15 || text.length > 200) return setCountColor('red');
    setCountColor('blue');
  }

  return (
    <div>
      <label>
        <p>Por favor, justifique a resposta anterior:</p>
        <textarea id={ 'Pergunta4' } value={ text } onChange={ handleChange } />
        <p style={ { display:"inline", color:`${countColor}` }}>{ `${wordCount}/200`}</p>
      </label>
    </div>
  );
}