import React, { useState, useEffect } from 'react';
import useWindowDimensions from '../windowSizeHook.jsx';


function NewGame () {
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
      <p className='underline'>N</p>
      <p>ew Game</p>
    </div>
  )
  
}

export default NewGame;