import React from 'react'
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import LaunchListContainer from './components/LaunchList/index'
import LaunchProfileContainer from './components/LaunchProfile/index'


const Routing = () => {
    return (
        <div className='Launch_list_main_div' >
           <Router>
               <Header/>
               <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/launch' element={<LaunchListContainer/>} />
                    <Route path='launch/:id' element={<LaunchProfileContainer/>} />
               </Routes>
               {/* <Footer/> */}
           </Router>
        </div>
    )
}

export default Routing
