import React, { useState, useEffect } from 'react';
import useWindowDimensions from '../components/windowSizeHook';
import folder from '../assets/windows_icons/Folder.png';
import internetExplorer from '../assets/windows_icons/InternetExplorer.png';
import myComputer from '../assets/windows_icons/MyComputer.png';
import openFolder from '../assets/windows_icons/OpenFolder.png';
import trashEmpty from '../assets/windows_icons/TrashEmpty.png';
import trashFull from '../assets/windows_icons/TrashFull.png';
import Shortcut from '../components/Shortcut';



function ShortcutContainer( {  } ) {
  const [photos, setPhotos] = useState(
    [
      {
        file: folder,
        label: 'Folder',
      },
      {
        file: internetExplorer,
        label: 'Internet Explorerer',
      },
      {
        file: myComputer,
        label: 'My Computer',
      },
      {
        file: openFolder,
        label: 'Open Folder',
      },
      {
        file: trashEmpty,
        label: 'Trash',
      },
      {
        file: trashFull,
        label: 'Full Trash',
      },
      
    ]
  )
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    
  
  }, [])

 
    return (
      <div
        style={
          {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'space-evenly',
            position: 'absolute',
            top: '3em',
            left: '3em',
            zIndex: '-1',
            color: 'hsla(0, 0%, 100%, 1.0)'
          }
        }
      >
        {photos.map((photo, index) => {
          const words = photo.label.split(' ');
          return(
            <Shortcut file={photo.file} words={words} key={index}/>
          )
        })}
      </div>
    )
  
}

export default ShortcutContainer;