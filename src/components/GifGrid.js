import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import {GifGridItem} from '../components/GifGridItem'

import '../index.css'

export const GifGrid = ({category}) => {

    //Custom Hook hace el trabajo pesado, se encarga de la lógica y de llamar la APi ademas de retrazar en 3 segundos la carga para usar por ejemplo una animacion spinner.
    const { data:images, loading} = useFetchGifs( category );

    return (
        <>
            <h3> {category} </h3>

            { loading && <div className="lds-dual-ring animate__animated animate__bounceInLeft"></div> }

            <div className="card-grid">
                    {images.map(( img ) => {
                        return(
                            <GifGridItem 
                                key={img.id}
                                {...img}
                            />
                        )
                    })}
            </div>

        </>
        
    )
}
