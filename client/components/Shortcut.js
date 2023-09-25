import React, { useState, useEffect } from 'react';
import useWindowDimensions from '../components/windowSizeHook';
import folder from '../assets/windows_icons/Folder.png';
import internetExplorer from '../assets/windows_icons/InternetExplorer.png';
import myComputer from '../assets/windows_icons/MyComputer.png';
import openFolder from '../assets/windows_icons/OpenFolder.png';
import trashEmpty from '../assets/windows_icons/TrashEmpty.png';
import trashFUll from '../assets/windows_icons/TrashFull.png';



function Shortcut( { file, words } ) {
  const [fileName, setFileName] = useState(file);
  
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    
  
  }, [])

 
    return (
      <div
        className='shortcut'
        style={
          {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.55em',
            lineHeight: '1.8em',
            margin: '1em 0',
          }
        }
      >
        <img 
          src={fileName} 
          style={
            {
              height: '4em',
              width: 'auto'
            }
          }
        />
        <div
          style={
            {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }
          }
        >
          {words.map((word, index) => (
            <p>{word}</p>
          ))}
        </div>
      </div>
    )
  
}

export default Shortcut;