import React, { useState, useEffect } from 'react';
import useWindowDimensions from '../windowSizeHook.jsx';


function Character () {
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
      <p className='underline'>C</p>
      <p>haracter</p>
    </div>
  )
  
}

export default Character;