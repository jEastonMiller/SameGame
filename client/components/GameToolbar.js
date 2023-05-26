import React, { useState, useEffect } from 'react';
import downArrow from '../assets/down_arrow.png'


function GameToolbar ({ height, width }) {

  return (
    <div 
    className='gameToolbar'
    style={{
      width: width,
      height: `${height}px`,
      border: '1px solid rgba(0, 0, 0, 1.0)',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'hsl(240, 100%, 38%)',
      fontSize: `${height * 0.5}px`,
    }} >
      <div  
        style={
          {
            boxSizing: 'border-box',
            borderWidth: `${0.1 * height}px`,
            borderStyle: 'inset',
            borderColor: 'hsl(0, 0%, 70%)',
            backgroundColor: 'hsl(0, 0%, 76%)',
            width: `${height * 0.94}px`,
            height: `${height * 0.94}px`,
          }
        }
      >
         <svg
          
          viewBox="0 0 24 24"
          xmlns="<http://www.w3.org/2000/svg>"
        >
          <rect
            width={height * 0.71}
            height={height * 0.22}
            rx={height * 0.02}
            strokeLinecap="round"
            strokeWidth={height * 0.04}
            stroke='rgba(0, 0, 0, 1.0)'
            fill='rgba(255, 255, 255, 1.0)'
           
          />
        </svg>
      </div>
        <h4
          style={
            {
              color: 'rgba(255, 255, 255, 1.0)'
            }
          }
        >Same Game for Windows</h4>
      <div 
      style={
        {
          boxSizing: 'border-box',
          borderWidth: `${0.1 * height}px`,
          borderStyle: 'outset',
          borderColor: 'hsl(0, 0%, 70%)',
          backgroundColor: 'hsl(0, 0%, 76%)',
          width: `${height * 0.94}px`,
          height: `${height * 0.94}px`
        }
      }
      >
        <img className='scale-50' src={downArrow}></img>
      </div>
    </div>
  )
}

export default GameToolbar;