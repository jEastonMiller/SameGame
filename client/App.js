import React, { useState, useEffect, Fragment } from 'react';


import { Toolbar, WindowsBar } from './components/components.js';
import MainContainer, { mainContainer } from './containers/MainContainer.js';



function App () {
  const [test, setTest] = useState(`didn't work :((`)

  useEffect(() => {
    try {
      const testReq = async function () {
        const response = await fetch('/api/users/login')
        let successfulReq = await response.json()
        console.log(successfulReq);
        setTest(successfulReq);
      }
      testReq();
    } catch (err) {
      console.log(err);
    }
  }, [])


  //flex justify-center items-center h-screen
  //flex flex-col justify-between items-center content-between

  return (
    <div className='flex flex-col justify-center items-center h-screen' >
        <Toolbar />
        <MainContainer />
        <WindowsBar />
    </div>
  )
}

export default App;