import React from 'react'
import './CardDescription.css'

export default function CardDescription({ name, year }) {
    return (
        <section className="desc">
            <div className="art-title">{name}</div>
            <div className="art-date">{year}</div>
        </section>
    )
}
