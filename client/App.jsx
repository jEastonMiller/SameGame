import React, { useState, useEffect, Fragment } from 'react';


import { Toolbar, WindowsBar } from './components/components.jsx';
import MainContainer, { mainContainer } from './containers/MainContainer.jsx';



function App () {

  return (
    <div 
      //className='flex flex-col justify-space-between items-center h-screen'
      style={
        {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }
      }
    >
        <dialog
          style={
            {
              height: '200px',
              width: '400px',
              border: '1px solid rgba(0, 0, 0, 1.0)',
              background: 'rgba(255, 255, 255, 1.0)'
            }
          }
        >
          <form>
            <p>Howdy</p>
            <button>Close</button>
          </form>

        </dialog>
        <Toolbar />
        <MainContainer />
        <WindowsBar />
    </div>
  )
}

export default App;