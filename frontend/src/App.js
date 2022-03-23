import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import NotFound from './Pages/NotFound'
import CreateRoom from './Pages/CreateRoom';
import Room from './Pages/Room';
import JoinRoom from './Pages/JoinRoom';
import './App.css';
import Oauth2 from './Pages/Oauth2';
import OauthMain from './Pages/OauthMain';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/oauth' element={<Oauth2 />} />
        <Route path='/oauth_main' element={<OauthMain />}/>
        <Route path='/main' element={<Main />}></Route>
        <Route path='/room/create' element={<CreateRoom />} />
        <Route path='/room/join' element={<JoinRoom />} />
        <Route path='/room' element={<Room />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;