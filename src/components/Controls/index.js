import React from 'react'
import useControls from './useControls'
import Card from '../Card'
import './Controls.css'

export default function Controls() {
    const { activeImg, setNextImg, setPreviousImg } = useControls()
    return (
        <>
            <Card activeImgObj={activeImg} />
            <div className="controls">
                <button onClick={setPreviousImg}>Previous</button>
                <button onClick={setNextImg}>Next</button>
            </div>
        </>
    )
}
