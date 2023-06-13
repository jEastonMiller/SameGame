import React, { useState, useEffect } from 'react';
import SubMenuContainer from '../containers/SubMenuContainer.jsx'


function GameWindowMenu ({ height, width, handleReplay }) {

  const [menuToggle, setMenuToggle] = useState(false);
  const [optionToggle, setOptionToggle] = useState(false);
  const [helpToggle, setHelpToggle] = useState(false);
  const [menuStyle, setMenuStyle] = useState({ background: 'rgba(0, 0, 0, 0.0)', text: 'rgba(0, 0, 0, 1.0)', border: `${height * 0.02}px solid rgba(0, 0, 0, 0.0)` });
  const [optionStyle, setOptionStyle] = useState({ background: 'rgba(0, 0, 0, 0.0)', text: 'rgba(0, 0, 0, 1.0)', border: `${height * 0.02}px solid rgba(0, 0, 0, 0.0)` });
  const [helpStyle, setHelpStyle] = useState({ background: 'rgba(0, 0, 0, 0.0)', text: 'rgba(0, 0, 0, 1.0)', border: `${height * 0.02}px solid rgba(0, 0, 0, 0.0)` });


  const handleMenuNav = (val, callback = null) => {

    switch (val) {
      case 'menu':
        setMenuToggle(!menuToggle);
        if( menuStyle.background === 'rgba(0, 0, 0, 0.0)' ) {
          setMenuStyle( { background: 'rgba(0, 0, 195, 1.0)', text: 'rgba(255, 255, 255, 1.0)', border: `${height * 0.02}px solid rgba(0, 0, 0, 1.0)` } )
        } else {
          setMenuStyle( { background: 'rgba(0, 0, 0, 0.0)', text: 'rgba(0, 0, 0, 1.0)', border: `${height * 0.02}px solid rgba(0, 0, 0, 0.0)` } )
        }
        console.log('menuStyle: ', menuStyle);
        if( optionToggle === true )setOptionToggle(false);
        if( helpToggle === true )setHelpToggle(false);
        setOptionStyle( { background: 'rgba(0, 0, 0, 0.0)', text: 'rgba(0, 0, 0, 1.0)', border: `${height * 0.02}px solid rgba(0, 0, 0, 0.0)` } );
        setHelpStyle( { background: 'rgba(0, 0, 0, 0.0)', text: 'rgba(0, 0, 0, 1.0)', border: `${height * 0.02}px solid rgba(0, 0, 0, 0.0)` } );
        break;
      case 'option':
        setOptionToggle(!optionToggle);
        if( optionStyle.background === 'rgba(0, 0, 0, 0.0)' ) {
          setOptionStyle( { background: 'rgba(0, 0, 195, 1.0)', text: 'rgba(255, 255, 255, 1.0)', border: `${height * 0.02}px solid rgba(0, 0, 0, 1.0)` } )
        } else {
          setOptionStyle( { background: 'rgba(0, 0, 0, 0.0)', text: 'rgba(0, 0, 0, 1.0)', border: `${height * 0.02}px solid rgba(0, 0, 0, 0.0)` } )
        }
        if( menuToggle === true )setMenuToggle(false);
        if( helpToggle === true )setHelpToggle(false);
        setMenuStyle( { background: 'rgba(0, 0, 0, 0.0)', text: 'rgba(0, 0, 0, 1.0)', border: `${height * 0.02}px solid rgba(0, 0, 0, 0.0)` } );
        setHelpStyle( { background: 'rgba(0, 0, 0, 0.0)', text: 'rgba(0, 0, 0, 1.0)', border: `${height * 0.02}px solid rgba(0, 0, 0, 0.0)` } );
        break;
      case 'help':
        setHelpToggle(!helpToggle);
        if( helpStyle.background === 'rgba(0, 0, 0, 0.0)' ) {
          setHelpStyle( { background: 'rgba(0, 0, 195, 1.0)', text: 'rgba(255, 255, 255, 1.0)', border: `${height * 0.02}px solid rgba(0, 0, 0, 1.0)` } )
        } else {
          setHelpStyle( { background: 'rgba(0, 0, 0, 0.0)', text: 'rgba(0, 0, 0, 1.0)', border: `${height * 0.02}px solid rgba(0, 0, 0, 0.0)` } )
        }
        if( optionToggle === true )setOptionToggle(false);
        if( menuToggle === true )setMenuToggle(false);
        setMenuStyle( { background: 'rgba(0, 0, 0, 0.0)', text: 'rgba(0, 0, 0, 1.0)', border: `${height * 0.02}px solid rgba(0, 0, 0, 0.0)` } );
        setOptionStyle( { background: 'rgba(0, 0, 0, 0.0)', text: 'rgba(0, 0, 0, 1.0)', border: `${height * 0.02}px solid rgba(0, 0, 0, 0.0)` } );
        break;
      default:
        console.log('huh??');
    }

  }

  return (
    <div 
      className='scoreFooter'
      style={{
        width: width,
        height: `${height}px`,
        border: '1px solid rgba(0, 0, 0, 1.0)',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'hsl(0, 0%, 100%)',
        fontSize: `${height / 2}px`,
      }} 
    >
      
      <div 

        style={
          {
            height: '100%',
          }
        }
      >
        <button 
          onClick={(event) => {
            handleMenuNav('menu');
          }}
          style={
            {
              height: '100%',
              padding: `0px ${height * 0.3}px`,
              backgroundColor: menuStyle.background,
              color: menuStyle.text,
              border: menuStyle.border
            }
          }
        >
          <span className='underline'>M</span>
          <span>enu</span>
        </button>
        { menuToggle && <SubMenuContainer subMenu={'menu'} handleReplay={handleReplay}/> }
      </div>

      <div
        style={
          {
            height: '100%',
          }
        }
      >
        <button
          onClick={(event) => {
            handleMenuNav('option');
          }} 
          style={
            {
              height: '100%',
              padding: `0px ${height * 0.3}px`,
              backgroundColor: optionStyle.background,
              color: optionStyle.text,
              border: optionStyle.border
            }
          }
        >
          <span className='underline'>O</span>
          <span>ption</span>
        </button>
        { optionToggle && <SubMenuContainer subMenu={'option'}/> }
      </div>

      
      <div
        style={
          {
            height: '100%',
          }
        }
      >
        <button
          onClick={(event) => {
            handleMenuNav('help');
          }}
          style={
            {
              height: '100%',
              padding: `0px ${height * 0.3}px`,
              backgroundColor: helpStyle.background,
              color: helpStyle.text,
              border: helpStyle.border
            }
          }

        >
          <span className='underline'>H</span>
          <span>elp</span>
        </button>  
        { helpToggle && <SubMenuContainer subMenu={'help'}/> }
      </div>

    </div>
  )
}

export default GameWindowMenu;