import React from 'react'
import icegif from '../assets/img/icegif.gif'
import Pikachu from '../assets/img/Pikachu.gif'

export default function Footer() {
  return (
    <footer className='footer bg-black txtfoo'>
            <div className='container'>
                <div className='row '>
                    <div className='col-lg-3 imgif'>  
                         <img src={icegif} loop className=' img-fluid m-auto w-25' />
                    </div>                
                    <div className='col-lg-6 col-sm-12 text-center mt-2'>
                        <p>POKEDEX_api</p>
                        <p className="copy-right">&copy; 2023.  Celeste Franco.</p>
                    </div>  
                    <div className='col-lg-3 col-sm-12 imgif'>  
                         <img src={Pikachu} loop className=' img-fluid m-auto w-25' />
                    </div>                  
                </div>
            </div>
        </footer>
  )
}
