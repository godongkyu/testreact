import logo from './logo.svg';
import img from './img/whale.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo" alt="logo" />

        <form className='form-single'>
          <div className="form-group">
            <label className="control-label">
              <p className="inputP">아이디</p>
              <input type="text" className='userId' placeholder='userId'></input>
              <p className="inputP inputpassword">비밀번호</p>
              <input typep="password" className='userPassword' placeholder='userPassword' maxLength={20}></input>
              <br></br>
              <button className="btn btn-primary">로그인</button>
            </label>
          </div>
        </form>

        <p className='test'>리액트 테스트</p>
        <p className='test'>
          c조는 <code>위대한</code> 조다
        </p>

   

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          하지만 서영정은 천재가 분명하다.
        </a>
      </header>
    </div>
  );
}
// function App() {
//   return (
//     <div className="App">
//       funckin easy react
//     </div>
//   );
// }

export default App;
