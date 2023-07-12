import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useHref } from 'react-router-dom'
import Login from './components/Pages/LoginForm/Login'
import { Provider } from 'react-redux'
import store from './components/ReduxStore/store'
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Sidebar from './components/Pages/Bars/Sidebar';
import Navbar from './components/Pages/Bars/Navbar';
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Pages/Index/Home'

import Add_user from './components/Pages/user_profile/Add_user'
import NewInvoice from './components/Pages/Branchs/NewInvoice'
import Commite from './components/Pages/Commite/Commite'

const App = () => {


  const isLoggedIn = localStorage.getItem('isLoggedIn');
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='flex h-screen'>
          <div className='h-screen'>
            {
              isLoggedIn && <Sidebar />
            }
            
          </div>
          {/* end sidebar */}

          <div className='w-full h-screen overflow-y-auto'>
            <div>
              {
                isLoggedIn && <Navbar/>
              }
              
            </div>
            {/* end navbar */}
            <div className='w-full  overflow-x-hidden overflow-y-auto pb-10'>
              <Routes>
                <Route element={<ProtectedRoute />}>
                  <Route path='/' element={<Dashboard />} />
                  <Route path='/user' element={<Add_user />} />
                  <Route path='invoice' element={<NewInvoice />}/>
                  <Route path='/commite' element={<Commite />} /> 
                </Route>
                <Route path='/login' element={<Login />} />
              </Routes>
            </div>
            
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App