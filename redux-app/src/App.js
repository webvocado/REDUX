import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { decrement, increment } from './redux/actions';

function App() {
  // 스토어의 상태 선택 : count
  const count = useSelector( (state) => state.count )
  // 디스패치
  const dispatch = useDispatch(count);



  return (
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card text-center p-4 shadow">
        <h1 className="card-title">Counter</h1>
        <h3>{count}</h3>
        <div className="card-body d-flex gap-3">
          <button className='btn btn-primary me-2 w-100'
                  onClick={() => dispatch(increment())}
          >+</button>
          <button className='btn btn-danger w-100'
                  onClick={() => dispatch(decrement())}
          >-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
