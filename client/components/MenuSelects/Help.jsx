import React, { useState, useEffect } from 'react';
import useWindowDimensions from '../windowSizeHook.jsx';


function Help () {
  const { height, width } = useWindowDimensions();
 
  return (
    <div 
      style={
        {
          display: 'flex',
          flexDirection: 'row',
          padding: '3px 15px',
          borderBottom: 'solid 1px rgba(0, 0, 0, 1.0)',
        }
      }
    >
      <p className='underline'>H</p>
      <p>elp...</p>
    </div>
  )
  
}

export default Help;