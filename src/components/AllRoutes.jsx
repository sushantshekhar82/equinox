import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ContactUs from '../pages/ContactUs'
import AboutUs from '../pages/AboutUs'
import Services from '../pages/Services'
import Bedroom from '../pages/Bedroom'
import Kitchen from '../pages/Kitchen'
import Livingroom from '../pages/Livingroom'
import BalconyArea from '../pages/BalconyArea'
import DiningRoom from '../pages/DiningRoom'
import GuestRoom from '../pages/GuestRoom'

const AllRoutes = () => {
  return (
    <div>
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/contactus' element={<ContactUs/>}/> 
       <Route path="/aboutus" element={<AboutUs/>}/>
       <Route path="/services" element={<Services/>}/>
       <Route path="/bedroom" element={<Bedroom/>}/>
       <Route path="/kitchen" element={<Kitchen/>}/>
       <Route path="/livingroom" element={<Livingroom/>}/>
       <Route path="/balcony" element={<BalconyArea/>}/>
       <Route path="/diningroom" element={<DiningRoom/>}/>
       <Route path="/guestroom" element={<GuestRoom/>}/>
        </Routes> 
    </div>
  )
}

export default AllRoutes