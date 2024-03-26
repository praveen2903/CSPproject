import React, { useContext } from 'react'
import Home from './Components/Home'
import { AuthContext } from './context/AuthContext';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PhonePickup from './pickup/Phonepickup';
import Login from './authentication/Login';
import Register from './authentication/Register';
import ResetPassword from './authentication/ResetPassword';
import VerifyingEmail from './authentication/VerifyEmail';
import Viewer from './viewer/Viewer';
import PickupForm from './pickup/Pickupform';

const App = () => {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/" />;
    }
    return children
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/pickuplogin' element={<PhonePickup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/reset' element={<ResetPassword/>} />
        <Route path='/verify' element={<VerifyingEmail/>}/>
        <Route path='/view' element={<ProtectedRoute><Viewer/></ProtectedRoute>}/>
        <Route path='/pickup' element={<ProtectedRoute><PickupForm/></ProtectedRoute>}/>
        <Route path="/view/:id" element={<ProtectedRoute><Viewer/></ProtectedRoute>} />
      </Routes>
      <ToastContainer position="top-right" bodyClassName="text-center font-bold text-blue-900"/>
    </div>
  )
}

export default App