import React, { useState, useEffect } from 'react';
import useWindowDimensions from '../windowSizeHook.jsx';


function Score () {
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
      <p>S</p>
      <p className='underline'>c</p>
      <p>ore</p>
    </div>
  )
  
}

export default Score;