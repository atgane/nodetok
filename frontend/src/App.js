import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/main' element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
