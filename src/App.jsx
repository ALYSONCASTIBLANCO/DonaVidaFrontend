import { useState } from 'react'
import AppNavbar from './components/layout/AppNavbar'
import AppFooter from './components/layout/AppFooter'
import PublicPage from './pages/PublicPage'
import AdminPage from './pages/AdminPage'
import Login from './pages/Login'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <Router>  
      <AppNavbar />
      <Routes>
        <Route path='/' element={<PublicPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
      </Routes>
      <AppFooter />
    </Router>
  )
}

export default App
