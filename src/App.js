import './App.css';
import {Route, Routes} from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Add_a_post from './components/Add_a_post';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landingpage/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/login' element={<Auth></Auth>}></Route>
        <Route path='/register' element={<Auth register></Auth>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/add-post' element={<Add_a_post></Add_a_post>}></Route>
      </Routes>
    </div>
  );
}

export default App;
