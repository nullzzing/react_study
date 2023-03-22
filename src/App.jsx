import{useState} from 'react';
// import request from './api/rezuest';
//useState 상태관리 함수

function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      return (
        <main>
          <input type="text" onChange={(event)=>console.log(event.target.value)} />
          <button>add</button>
        </main>
      )
    </div>
  );
}


export default App;
