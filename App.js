import { Routes, Route } from 'react-router-dom';
// import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Layout from './Components/Layout'




function App() {
  return (
    <div className='bg'>

      <Routes>
        <Route path='/' element={<Layout />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>






    </div>
  );
}

export default App;
