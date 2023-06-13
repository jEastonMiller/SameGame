import React, { useState, useEffect } from 'react';
import useWindowDimensions from '../windowSizeHook.jsx';


function Replay ( { handleReplay } ) {
  const { height, width } = useWindowDimensions();
 
  return (
    <div 
      onClick={() => {
        handleReplay();
      }}
      style={
        {
          display: 'flex',
          flexDirection: 'row',
          borderBottom: 'solid 1px rgba(0, 0, 0, 1.0)',
          padding: '3px 15px'
        }
      }
    >
      <p className='underline box-border'>R</p>
      <p className='box-border' >eplay</p>
    </div>
  )
  
}

export default Replay;