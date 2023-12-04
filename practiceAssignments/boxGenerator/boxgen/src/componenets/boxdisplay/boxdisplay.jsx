import React, {useState } from 'react'

const BoxDisplay = (props) => {
    console.log('props line 4: boxdipslay', props)
    const boxes = props.boxes;
    return (
        <div>
            {boxes.map((box,index) => (
                <div key={index} style={{backgroundColor: box, height: '100px', width: '100px'}}></div>
            ))}
        </div>
    )
}

export default BoxDisplay