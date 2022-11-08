import React from 'react'
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from './brain.png'


const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className='Tilt' tiltMaxAngleX={3} tiltMaxAngleY={3} >
        <div className='pa3' style={{ height: '150px',width:'150px' }}>
        <img src={brain} alt='brain' style={{ height: '100px',width:'100px'}}></img>
        </div>
      </Tilt>
    </div>
  )
}

export default Logo