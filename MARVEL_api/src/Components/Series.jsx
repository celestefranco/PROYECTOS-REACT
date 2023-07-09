import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Series() {
  const [series, setSeries] = useState([]);

  const obtenerSeries = () => {
    axios.get("https://gateway.marvel.com/v1/public/series?ts=1&apikey=30de36485b81b5161f34047676ad5c12&hash=aaeac2018c248e775edbd406b849f5c0").then((response) => {
        console.log(response);
        setSeries(response.data.data.results);
    }).catch((error) => {
        console.log(error);
    })
  }
    useEffect(() => {
      obtenerSeries();
  }, [])

  return (
    <div className='bg-dark'>
    <div className='container'>
            <h1 className='text-center text-white'>Lista de Series</h1>
            <div className='row'>
                {
                    series.map((series, indice) =>{
                        return (
                            <div className='col-md-4 mt-4' key={indice}>
                                <div className='card series'>
                                    <h5 className='card-header'>Titulo: {series.title}</h5>                                   
                                      <div className='card-body'>
                                    <img src={`${series.thumbnail.path}.${series.thumbnail.extension}`} alt={series.title} className='imgcomics' />
                                    <a href={series.urls[0].url} className='btn btn-primary mt-3 d-flex justify-content-center' target='_blank'>Ver detalles</a>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }

            </div>
        </div>
  </div>

  )
}
