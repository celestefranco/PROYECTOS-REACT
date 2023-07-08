import React, { useEffect, useState } from 'react'
import CardPokemon from './CardPokemon';

export default function Pokemones() {
  const [pokemones, setPokemones] = useState([]);

  const getPokemones = async () => {
      const resultado = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");
      const datos = await resultado.json();

      function caracteristicasPokemon(resultado){ 
          resultado.forEach(async (pokemon) => {
              const respoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);

              const datopoke = await respoke.json();
              
              setPokemones((listaActual) => [...listaActual, datopoke]);
              await pokemones.sort((a, b) => a.id - b.id);
              
          });
      }

      caracteristicasPokemon(datos.results);
      
  }

  useEffect(() => {
      getPokemones();
  }, [])

  console.log(pokemones); 
  return (
    <div className='container'>
          <div className='row'>
            <div className='text-center'>
              <h1>Api Pokemones</h1>
              <p className='paragraph'>Generando listado de 100 Pokemones utilizando React</p>
            </div>
            {

              pokemones.map((pokemon, indice) => (
                <div className='col-md-4'>
                  
                  <CardPokemon
                    key={indice}
                    id={pokemon.id.toString().padStart(3, "0")}
                    name={pokemon.name}
                    specie={pokemon.species.name}
                    image={pokemon.sprites.other["official-artwork"].front_default}
                    height={pokemon.height}
                    weight={pokemon.weight}
                    stats={pokemon.stats[0].base_stat}
                    tipe={pokemon.types[0].type.name}
                  />
                </div>              

              ))
            }
          </div>
    </div>
  )
}
