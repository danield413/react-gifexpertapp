import React from 'react'
import '../index.css'

export const GifGridItem = ({title,url}) => {
    return (
        <div className="card animate__animated animate__fadeInLeftBig">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

