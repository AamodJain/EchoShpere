import './App.css'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import Home from './pages/home/home'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContex } from './context/authContext'

function App() {
  const {authUser} = useAuthContex();
  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>
        <Routes>
          <Route path='/' element = {authUser ? <Home/> : <Login/>}/>
          <Route path='/login' element = {authUser ? <Home/> : <Login/>}/>
          <Route path='/signup' element = {authUser ? <Home/> : <Signup/>}/>
        </Routes> 
        <Toaster/>
      </div>
    </>
  )
}

export default App
