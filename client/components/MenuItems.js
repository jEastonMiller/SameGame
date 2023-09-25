import React, { useState, useEffect } from 'react';
import useWindowDimensions from '../components/windowSizeHook';
import { Dropdown } from './components'


function MenuItems( { pieces, underline, style, index, submenus, submenuType, height } ) {
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    
  
  }, [])

 
    return (
      <li 
        className='menu-items' 
        key={index}
        
        style={
          {
            position: 'relative',
            display: 'inline-flex',

          }
        }
      >
        <button
          aria-expanded={dropdown ? "true" : "false"}
          onClick={() => setDropdown((prev) => !prev)}
        >
          {pieces[0]}
          <u>{underline}</u>
          {pieces[1]}
        </button>
        <Dropdown 
          submenus={submenus} 
          dropdown={dropdown} 
          submenuType={submenuType}
          height={height}
        />
      </li>
    )
  
}

export default MenuItems;