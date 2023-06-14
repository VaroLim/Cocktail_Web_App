import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// import Welcome from '../../views/Welcome'
import Dashboard from '../../views/Dashboard'
// import Login from '../../views/Auth/Login'
// import Signup from '../../views/Auth/Signup'
import { FC } from 'react'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/*" element={<Navigate replace to="/Welcome" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router