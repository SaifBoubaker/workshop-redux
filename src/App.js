import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { decrement, increment, incrementByAmount } from "./redux/counterSlice";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [number, setNumber] = useState(0);
  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div className="App">
      <p>This is {count} </p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <p>
        Increment By <input onChange={handleChange} />
      </p>

      <button onClick={() => dispatch(incrementByAmount(+number))}>Add </button>
    </div>
  );
}

export default App;
