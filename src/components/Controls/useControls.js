import React from 'react'
import ImageContext from '../../context/ImageContext'

const useControls = () => {
    const imgs = React.useContext(ImageContext)
    const [activeIndex, setActiveIndex] = React.useState(0)
    const [isPreviousDisabled, setIsPreviousDisabled] = React.useState(true)
    const [isNextDisabled, setIsNextDisabled] = React.useState(false)
    const activeImg = imgs[activeIndex]

    const setNextImg = () => {
        if (activeIndex < imgs.length - 1) {
            setActiveIndex(activeIndex + 1)
            return
        }
        return
    }

    const setPreviousImg = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1)
            return
        }
        return
    }

    React.useEffect(() => {
        if (activeIndex === 0) {
            setIsPreviousDisabled(true)
            return
        }
        setIsPreviousDisabled(false)
    }, [activeIndex])

    React.useEffect(() => {
        if (activeIndex === imgs.length - 1) {
            setIsNextDisabled(true)
            return
        }
        setIsNextDisabled(false)
    }, [activeIndex])

    return {
        activeImg,
        setNextImg,
        setPreviousImg,
        isPreviousDisabled,
        isNextDisabled,
    }
}

export default useControls
