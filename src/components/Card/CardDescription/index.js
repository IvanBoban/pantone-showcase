import React from 'react'
import propTypes from 'prop-types'
import './CardDescription.css'

export default function CardDescription({ name, year }) {
    return (
        <section className="desc">
            <div className="art-title">{name}</div>
            <div className="art-date">{year}</div>
        </section>
    )
}

CardDescription.propTypes = {
    name: propTypes.string.isRequired,
    year: propTypes.number.isRequired,
}
