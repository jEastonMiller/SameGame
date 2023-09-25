import React, { useState, useEffect, Fragment } from 'react';


import { Toolbar, WindowsBar } from './components/components.js';
import MainContainer, { mainContainer } from './containers/MainContainer.js';
import ShortcutContainer from './containers/ShortcutContainer.js';
import Window from './containers/Window.js';
import windowsLogo from './assets/windows_icons/WindowsLogoClean.png'




function App () {
  const [test, setTest] = useState(`didn't work :((`)



  useEffect(() => {
    
    try {
      const testReq = async function () {
        const response = await fetch('/api')
        let successfulReq = await response.json()
        console.log(successfulReq);
        setTest(successfulReq);
      }
      console.log('req: ',successfulReq);
      testReq();

    } catch (err) {
      console.log('here is the error: ', err);
    }
  }, [])


  //flex justify-center items-center h-screen
  //flex flex-col justify-between items-center content-between

  return (
    <div className='flex flex-col justify-center items-center h-screen text-base' >
        <ShortcutContainer />
        <Window />
        <WindowsBar />
    </div>
  )
}

export default App;