import React from 'react'

import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';


const AllRoutes = () => {
  return (
    <Routes>
    <Route path='/' exact element={<HomePage /> } />
    <Route path='/user' exact element={<UserList /> } />
    <Route path='/user/add' exact element={<AddUser /> } />
      <Route path='/user/edit/:code' exact element={<UpdateUser />} />
      <Route path='*'  />
    </Routes>
  )
}

export default AllRoutes