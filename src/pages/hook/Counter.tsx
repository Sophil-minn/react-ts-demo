import { useReducer } from "react";

function init(initialCount: number) {
  return { count: initialCount };
}

function reducer(state: { count: number; }, action: any) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

const CounterCom: React.FC<{ initialCount: number }> = (props) => {
  const { initialCount } = props;
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'reset', payload: initialCount })}>  Reset </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
function CounterCom2(initialCount: number) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'reset', payload: initialCount })}>   Reset  </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
const CounterCom3: React.FC<{ initialCount: number }> = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'reset', payload: initialCount })}>   Reset  </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}

function Counter(initialCount: number) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      <div>
        CounterCom: <CounterCom initialCount={1} />
        CounterCom2: {CounterCom2(2)}
        {/* CounterCom2: <CounterCom2 initialCount={2} /> */}
        CounterCom3: <CounterCom3 initialCount={3} />
      </div>
      <div>
        CounterCom: <CounterCom initialCount={2} />   CounterCom2:  {CounterCom2(100)}
      </div>

      <p> Count: {state.count}</p>
      <button
        onClick={() => dispatch({ type: 'reset', payload: initialCount })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}

export default Counter;