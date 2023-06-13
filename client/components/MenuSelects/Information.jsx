import React, { useState, useEffect } from 'react';
import useWindowDimensions from '../windowSizeHook.jsx';


function Information () {
  const { height, width } = useWindowDimensions();
 
  return (
    <div 
      style={
        {
          display: 'flex',
          flexDirection: 'row',
          borderBottom: 'solid 1px rgba(0, 0, 0, 1.0)',
          padding: '3px 15px'
        }
      }
    >
      <p className='underline'>I</p>
      <p>nformation</p>
    </div>
  )
  
}

export default Information;