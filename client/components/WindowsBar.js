import React, { useState, useEffect } from 'react';
import windowsLogo from '../assets/windows_icons/wl_centered.png'


function WindowsBar () {

  return (
    <div 
      style={
        {
          width: 'calc(100vw - (100vw - 100%))',
          height: '2vw',
          background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(192,192,192,1) 1%, rgba(192,192,192,1) 99%, rgba(255,255,255,1) 100%)',
          position: 'absolute',
          bottom: '0',
          border: 'black 1px solid',
          display: 'flex',
          alignItems: 'center',

        }
      }
    >
      <div
        id='windowsStart'
        style={
          {
            width: '7vw',
            height: '1.5vw',
            background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(192,192,192,1) 1%, rgba(192,192,192,1) 99%, rgba(255,255,255,1) 100%)',
            position: 'absolute',
            border: 'black 1px solid',
            marginLeft: '.25em',
            fontSize: '0.7em',
            display: 'inline-flex',
          }
        }
      >
        <img 
        src={windowsLogo} 
        alt='windows logo'
        style={
          {
            height: '1.5vw',
            width: 'auto'
          }
        }
        />
        <p
          style={
            {
              marginLeft: '0.3em'
            }
          }
        >Start</p>
      </div>
    </div>
  )
}

export default WindowsBar;