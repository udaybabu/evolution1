import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Message from './Components/Message';
import ButtonClick from './Components/ButtonClick';
import ParentData from './Components/ParentData';
function App() {
  return (
    <div className="App">
      <Greet name='Uday' place='piler'/>
      <Message name='Uday' place='piler'/>
      <ButtonClick />
      <ParentData />
    </div>
  );
}

export default App;
