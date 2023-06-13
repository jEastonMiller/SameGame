import React, { useState, useEffect } from 'react';
import useWindowDimensions from './windowSizeHook.jsx';


function WindowsBar () {
  const { height, width } = useWindowDimensions();

  return (
    <div 
      style={
        {
          border: '1px solid rgba(0, 0, 0, 1.0)',
          width: '100%',
          height: `${height / 20}px`,
          alignSelf: 'flex-end'

        }
      }
    >
      
    </div>
  )
}

export default WindowsBar;