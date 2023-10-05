import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Message from './Components/Message';
import ButtonClick from './Components/ButtonClick';
import ParentData from './Components/ParentData';
import MappingData from './Components/MappingData';
import React,{ useState } from 'react';
function App() {
  const [empDetails, setempDetails] = useState([
    {
      name:'prasad',
      place:'kalikari',
      age:'32'
    },
    {
      name:'kumar',
      place:'piler',
      age:'31'
    },
    {
      name:'hemanth',
      place:'hyderabad',
      age:'29'
    }
  ])
  return (
    <div className="App">
      <Greet name='Uday' place='piler'/>
      <Message name='Uday' place='piler'/>
      <ButtonClick />
      <ParentData />
      {/* <MappingData dataList={empDetails} /> */}
      {empDetails.map((element, index) => {
        return (
          <div key={index}>
            <h2>{element.name}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
