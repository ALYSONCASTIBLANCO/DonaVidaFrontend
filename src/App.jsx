import { useState } from 'react'
import AppNavbar from './components/layout/AppNavbar'
import AppFooter from './components/layout/AppFooter'
import PublicPage from './pages/PublicPage'
import AdminPage from './pages/AdminPage'
import Login from './pages/Login'
//Usamos el ProtectedRoute para evitar que cualquiera pueda acceder a esta pagina.
import ProtectedRoute from './components/layout/ProtectedRoute'
import {BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import AdminNavbar from './components/layout/AdminNavbar'

function App() {
//Manejo dinamico de header y footer usando useLocation para saber donde esta.
//Se crea componente auxiliar para que pueda usarse dentro del contexto correcto sin errores.
//Nota de aprendizaje: si un componente tiene una subresponsablidad clara, cuando se necesitan
//usar hooks que el padre no puede alcanzar durectamente o cuando aparece la misma logica en 
//diferentes lugares, es bueno usar un componente auxiliar.
function AppLayout(){
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  return(
    <>
      { !isAdmin ? <AppNavbar /> : <AdminNavbar/> }
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

      {!isAdmin && <AppFooter />}
    </>
  );
  }


  return (
    <Router>
      <AppLayout/>  
    </Router>
  )
}

export default App
