import React, { useState, useEffect } from 'react';
import useWindowDimensions from '../windowSizeHook.jsx';


function About () {
  const { height, width } = useWindowDimensions();
 
  return (
    <div 
      style={
        {
          display: 'flex',
          flexDirection: 'row',
          padding: '3px 15px'
        }
      }
    >
      <p className='underline'>A</p>
      <p>bout...</p>
    </div>
  )
  
}

export default About;