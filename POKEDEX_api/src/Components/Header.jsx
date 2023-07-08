import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Pokemones from './Pokemones'
import Logo_Pokemon from '../assets/img/Logo_Pokemon.png'

export default function Header() {
  return (
    <BrowserRouter>
            <header>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                  <div className="container-fluid">
                      <img src={Logo_Pokemon} className="d-block timg" alt="Logo_Pokemon" />
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNav">
                          <ul className="navbar-nav">
                              <li className="nav-item">
                                  <Link to='/' className="nav-link active Nav-txt" aria-current="page">Home</Link>
                              </li>
                              <li className="nav-item">
                                  <Link to='/pokemones' className="nav-link Nav-txt">Pokemones</Link>
                              </li>                             
                          </ul>
                      </div>
                  </div>
              </nav>
            </header>
           
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/pokemones' element={<Pokemones />}/>              
            </Routes>
        </BrowserRouter>
  )
}
