import React,{useState} from 'react'
import '../styles/Greet.css'

const Greet = (props) => {
  const {name,place} = props;
  const [message, setmessage] = useState('Hi prasd');
  const [count, setcount] = useState(Number);
  const clickHandler = () => {
   setmessage('Bye prasad');
  }
  const incrementHandler = ()  => {
    setcount(count+1)
  }
  const decrementHandler = ()  => {
    setcount(count-1)
  }
  return (
      <div>
          <h2>Hello {name} from {place}</h2>
          <div>
              <button onClick={incrementHandler}>+</button>
              <h2 className='inline_wrapper'>{count}</h2>
              <button onClick={decrementHandler}>-</button>
          </div>
          <button onClick={clickHandler}>ClickMe</button>
      </div>
  )
}

export default Greet
