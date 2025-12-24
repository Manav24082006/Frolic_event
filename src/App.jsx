import { React } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './Layout'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Department from './pages/Department'
import Events from './pages/Events'
import Institutes from './pages/Institutes'
import Dashboard from './Dashboard'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='Dashboard' element={<Dashboard/>} />
          <Route path='Institutes' element={<Institutes/>} />
          <Route path='Department' element={<Department/>} />
          <Route path='Events' element={<Events/>}/>
          <Route path='Login' element={<Login/>} />
          <Route path='Signup' element={<Signup/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
