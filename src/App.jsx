import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import { Login } from './pages/auth/Login';
import { Error404 } from './pages/Error404';
import { Register } from './pages/auth/Register';
import { LayoutAdmin } from './layouts/LayoutAdmin';
import { Home } from './pages/admin/Home';
import { Chat } from './pages/admin/Chat';
import { LayoutAuth } from './layouts/LayoutAuth';
import { ForgetPassword } from './pages/auth/ForgetPassword';
import { Profile } from './pages/admin/Profile';
import { Tickets } from './pages/admin/Tickets';


function App() {

  return (
    <BrowserRouter className='bg-secondary-900 text-gray-300'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/registro' element={<Register />} />
        <Route path='/olvide-password' element={<ForgetPassword />} />
        <Route path='/' element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path='perfil' element={<Profile />} />
          <Route path='chat' element={<Chat />} />
          <Route path='tickets' element={<Tickets />} />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
