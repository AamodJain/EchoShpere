import './App.css'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import Home from './pages/home/home'

function App() {
  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>
        {/* <Signup /> */}
        {/* <Login /> */}
        <Home/>
      </div>
    </>
  )
}

export default App
