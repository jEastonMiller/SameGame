import React, { useState, useEffect } from 'react';
import useWindowDimensions from '../windowSizeHook.jsx';


function Exit () {
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
      <p className='underline'>E</p>
      <p>xit</p>
    </div>
  )
  
}

export default Exit;