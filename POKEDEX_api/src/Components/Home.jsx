import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Pokemon from '../assets/img/Pokemon.jpg'
import Pokemon_1 from '../assets/img/Pokemon_1.jpg'
import Pokemon_super from '../assets/img/Pokemon_super.jpg'



export default function Home() {
  return (
    <main className='container'>
      <div className='pt-5'>
            <Carousel>
                <div>
                    <img src={Pokemon} />                   
                </div>
                <div>
                    <img src={Pokemon_1} />                    
                </div>
                <div>
                    <img src={Pokemon_super} />                    
                </div>            
            </Carousel>
      </div>
           
      <div className='pt-3 pb-5'>
          <h1 className='text-center'>POKEMON NEWS</h1>
          <div className='row'>
            <div className='col-lg-6 col-sm-12 vid'>
                <iframe width="550" height="392" src="https://www.youtube.com/embed/lYDaYujzE7o" title="Llega una nueva serie Pokémon" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>        
                </iframe>
              </div>
              <div className='col-lg-6 col-sm-12 vid '>
                <iframe width="550" height="392" src="https://www.youtube.com/embed/Aa4y0wqeYaQ" title="Pikachu vs. Golurk | Serie Pokémon Sol y Luna-Ultraleyendas | Clip Oficial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
          </div>
      </div>
    </main>
  )
}

