import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Add from './pages/Add'  // Update the name here
import ProtectedRoute from './components/ProtectedRoute'


function Logout() {
  localStorage.clear()  // Correct the typo here
  return <Navigate to="/login"/>
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />
        <Route path="/login" element={<Add />} />  {/* Ensure you're using Add here */}
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/register" element={<RegisterAndLogout />} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App
