import React from 'react'
import './augh.css'

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 100,
            width: 5,
            display: "flex",
            justifyContent: center,
        }}
    />
)

function center() {
  return (
    <div className='augh'>
       <ColoredLine color="red" />
    </div>
  )
}

export default center