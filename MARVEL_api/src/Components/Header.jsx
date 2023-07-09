import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import Home from './Home'
import Comics from './Comics'
import Series from './Series'
import BuscarPersonajes from './BuscarPersonajes'

export default function Header() {
  return (
      <BrowserRouter>
          <header>
              <nav className="navbar navbar-expand-lg ">
                 <img src={logo} className="d-block nimg" alt="marvel" />
                  <div className="container">                       
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNav">
                          <ul className="navbar-nav ">
                              <li className="nav-item">
                                  <Link to="/"  className="nav-link  nav-txt" aria-current="page" >Home</Link>
                              </li>
                              <li className="nav-item">
                                  <Link to="/comics"  className="nav-link nav-txt" >Comics</Link>
                              </li>
                              <li className="nav-item">
                                  <Link to="/series"  className="nav-link nav-txt" >Series</Link>
                              </li>                              
                          </ul>
                      </div>
                  </div>
              </nav>
          </header> 
          <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/comics' element={<Comics />}/>
                <Route path='/series' element={<Series />}/>   
                <Route path='/busqueda' element={<BuscarPersonajes />}/>            
            </Routes>
        </BrowserRouter>
  )
}
