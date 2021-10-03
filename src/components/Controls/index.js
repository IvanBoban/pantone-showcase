import React from 'react'
import useControls from './useControls'
import Card from '../Card'
import './Controls.css'

export default function Controls() {
    const {
        activeImg,
        setNextImg,
        setPreviousImg,
        isNextDisabled,
        isPreviousDisabled,
    } = useControls()
    return (
        <main>
            <Card activeImgObj={activeImg} />
            <div className="controls">
                <button
                    onClick={setPreviousImg}
                    disabled={isPreviousDisabled}
                ></button>
                <button onClick={setNextImg} disabled={isNextDisabled}></button>
            </div>
        </main>
    )
}
