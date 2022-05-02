export default function Question3({ handle }) {
  return (
    <div>
      <p>Gostaria de fazer parte da GRX?</p>
      <select id={ 3 } onClick={ handle }>
        <option value='Sim'>Sim</option>
        <option value='Não'>Não</option>
        <option value='Não sei'>Não sei</option>
        <option value='Agora!!'>Agora!!</option>
      </select>
    </div>
  );
}
