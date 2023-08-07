import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Main from './containers/Main';
import LoginVoting from './containers/LoginVoting';
import CreateVote from './containers/CreateVote';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Main/>}/>
          <Route path='/LoginVoting' element={<LoginVoting/>} />
          <Route path='/redirect' element={ <Navigate to='./containers/LoginVoting'/>}   />

          <Route path='/CreateVote' element={<CreateVote/>} />
          <Route path='/redirect' element={ <Navigate to='./containers/CreateVote'/>}   />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
