import React from 'react'
import CardDescription from './CardDescription'
import ImageContainer from './ImageContainer'
import imgsObj from '../../imgObj'
export default function index() {
    return (
        <article className="card">
            <ImageContainer src={imgsObj.src} alt={imgsObj.name} />
            <CardDescription name={imgsObj.name} year={imgsObj.year} />
        </article>
    )
}
