import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from '../Components/DashBoard'
import EventRegister from '../Components/EventRegister'
import SignInSide from '../Components/Login'
import ResponsiveAppBar from '../Components/Navbar'
import PageNotFound from '../Components/PageNotFound'
import Signup from '../Components/SignUp'

const Router = () => {
  return (
    <div>
        <ResponsiveAppBar />
        <Routes>
        <Route path="*" element={<PageNotFound />} />
<Route path="/signin" element={<SignInSide />}  />
<Route path="/signup" element={<Signup />}  />
            <Route path="/" element={<DashBoard />}  />
            <Route path="/eventregister" element={<EventRegister />} />
        </Routes>
    </div>
  )
}

export default Router