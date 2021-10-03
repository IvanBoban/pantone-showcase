import React from 'react'
import ImageContext from '../../context/ImageContext'

const useControls = () => {
    const imgs = React.useContext(ImageContext)
    const [activeIndex, setActiveIndex] = React.useState(0)
    const activeImg = imgs[activeIndex]

    const setNextImg = () => {
        if (activeIndex <= imgs.length) {
            setActiveIndex(activeIndex + 1)
            return
        }
        return
    }

    const setPreviousImg = () => {
        console.log('previous')
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1)
            return
        }
        return
    }

    return {
        activeImg,
        setNextImg,
        setPreviousImg,
    }
}

export default useControls
