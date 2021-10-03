import React from 'react'
import propTypes from 'prop-types'
import './ImageContainer.css'
export default function ImageContainer({ src, alt }) {
    return <img src={src} alt={alt} />
}

ImageContainer.propTypes = {
    src: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
}
