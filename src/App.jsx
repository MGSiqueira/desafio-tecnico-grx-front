import './App.css';
import Form from './components/Form';
import AnswersInfo from './components/AnswersInfo';

function App() {
  return (
    <div className="App">
      <h1>Desafio Coleta - GRX</h1>
      <div className='container-content'>
        <Form />
        <AnswersInfo />
      </div>
    </div>
  );
}

export default App;
