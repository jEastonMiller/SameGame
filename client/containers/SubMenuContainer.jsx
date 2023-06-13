import React, { useState, useEffect } from 'react';
import useWindowDimensions from '../components/windowSizeHook.jsx';
import { About, Character, Exit, Help, Information, NewGame, Replay, Score, Size, Undo } from '../components/MenuSelects/MenuSelects.jsx'


function SubMenuContainer ( { subMenu, handleReplay } ) {
  const { height, width } = useWindowDimensions();
 
  return (
    <div
      //className='bg-white absolute z-1 box-border border-1 border-solid border-black divide-7 divide-solid'
      className='subMenuContainer'
      style={
        {
          background: 'rgba(255, 255, 255, 1.0)',
          position: 'absolute',
          zIndex: '1',
          borderBottom: 'solid 2px rgba(0, 0, 0, 1.0)',
          borderRight: 'solid 2px rgba(0, 0, 0, 1.0)',
          outlineBottom: '2px solid rgba(128, 128, 128, 1.0)',
          
        }
      }
    >
      <div>
        { subMenu === 'menu' && <NewGame /> }
        { subMenu === 'menu' && <Replay handleReplay={handleReplay} /> }
      </div>
      <div>
        { subMenu === 'menu' && <Undo /> }
        { subMenu === 'menu' && <Score /> }
        { subMenu === 'menu' && <Information /> }
      </div>
      { subMenu === 'menu' && <Exit /> }

      { subMenu === 'option' && <Size /> }
      { subMenu === 'option' && <Character /> }

      { subMenu === 'help' && <Help /> }
      { subMenu === 'help' && <About /> }
    </div>
  )
  
}

export default SubMenuContainer;