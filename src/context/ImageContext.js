import React from 'react'
import imgsArray from './imageArray'
const ImagesContext = React.createContext()

export const ImagesContextProvider = ({ children }) => {
    return (
        <ImagesContext.Provider value={imgsArray}>
            {children}
        </ImagesContext.Provider>
    )
}

export default ImagesContext
