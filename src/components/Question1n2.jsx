export default function Question1n2({ number, text, handle, answers }) {
  return (
    <div>
      <p>{ text }</p>
      <button
        id={ number }
        value='Sim'
        onClick={ handle }
        style={ answers[number] === 'Sim' ? { backgroundColor: "red" } : { backgroundColor: ""} }
      >
        Sim
      </button>
      <button
        id={ number }
        value='Não'
        onClick={ handle }
        style={ answers[number] === 'Não' ? { backgroundColor: "red" } : { backgroundColor: ""} }
      >
        Não
      </button>
    </div>
  );
}
