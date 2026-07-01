import { useState } from 'react'
import AppNavbar from './components/layout/AppNavbar'
import AppFooter from './components/layout/AppFooter'
import PublicPage from './pages/PublicPage'
import AdminPage from './pages/AdminPage'
import Login from './pages/Login'
//Usamos el ProtectedRoute para evitar que cualquiera pueda acceder a esta pagina.
import ProtectedRoute from './components/layout/ProtectedRoute'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <Router>  
      <AppNavbar />
      <Routes>
        <Route path='/' element={<PublicPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route 
        path='/admin' 
        element={
        <ProtectedRoute>
          <AdminPage/>
        </ProtectedRoute>
        }/>
      </Routes>
      <AppFooter />
    </Router>
  )
}

export default App
