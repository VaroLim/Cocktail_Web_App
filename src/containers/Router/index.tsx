import { FC, memo } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from '../../views/Dashboard'
import Cocktails from '../../views/Cocktails'
import Login from '../../views/Auth/Login/login'
import Signup from '../../views/Auth/Signup/signup'
import Details from '../../views/Details'

const Router: FC = ({ }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/categories/:categoryName" element={<Cocktails />} />
        <Route path="/details/:categoryName/:cocktelImg/" element={<Details categoryName={''} />} />
        <Route path="/*" element={<Navigate replace to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default memo(Router)