import React from 'react'
import CardDescription from './CardDescription'
import ImageContainer from './ImageContainer'
import './Card.css'

export default function Card({ activeImgObj }) {
    return (
        <article className="card">
            <ImageContainer src={activeImgObj.src} alt={activeImgObj.name} />
            <CardDescription
                name={activeImgObj.name}
                year={activeImgObj.year}
            />
        </article>
    )
}
