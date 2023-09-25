import React, { useState, useEffect } from 'react';
import useWindowDimensions from '../components/windowSizeHook';


function Block ({ key, x, y, textColor, val, color, handleMatchClick, boardSize, coordCacheStore, handleDeselect}) {
  const [blockSize, setBlockSize] = useState(null);
  const [border, setBorder] = useState('3px')

  const { height, width } = useWindowDimensions();
  
  useEffect(() => {
    //console.log('new block: ', val)
    if ( height / width > (boardSize * 100) / 2000 ) {
      setBlockSize( (( (width - 75) * ( ( boardSize * 100 ) / 2000 ) ) / 10) - 0.4 );
    } else {
      setBlockSize( (( height - 150 ) / boardSize) );
    }
  }, [height])

  useEffect(() => {
    
  
  }, [])

  if(!val) {
    return (
      <div 
      onClick={
        (event) => {
          const targetLetter = event.target.innerHTML
          let compareArray = [];
          if (coordCacheStore) {
            compareArray = JSON.parse(JSON.stringify(coordCacheStore))
          }
          if (!coordCacheStore || compareArray.includes(`{"${y}":${x}}`)) handleMatchClick(x, y, targetLetter);
          else handleDeselect(compareArray);
        }
      }
      style={{
        boxSizing: 'border-box',
        height: '100%',
        width: '100%',
        gridColumn: x + 1,
        gridRow: y + 1,
      }}
    >

    </div>
    )
  }
  else return (
    <div 
      onClick={
        (event) => {
          const targetLetter = event.target.innerHTML
          console.log(event.target);
          console.log('x: ', x);
          console.log('y: ', y);
          console.log(coordCacheStore);
          let compareArray = [];
          if (coordCacheStore) {
            compareArray = JSON.parse(JSON.stringify(coordCacheStore))
          }
          console.log('compare array: ', compareArray, 'compare string: ', `{"${y}":${x}}`)
          if (!coordCacheStore || compareArray.includes(`{"${y}":${x}}`)) handleMatchClick(x, y, targetLetter);
          else handleDeselect(compareArray);
        }
      }
      style={{
        boxSizing: 'border-box',
        backgroundColor: color,
        borderWidth: '0.2em',
        borderStyle: 'outset',
        borderColor: 'hsl(0, 0%, 76%)',
        height: '100%',
        width: '100%',
        gridColumn: x + 1,
        gridRow: y + 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1
        className='block'
        style={{
        color: textColor,
        fontSize: '1.9em',
        }}
      >{val}</h1>
    </div>
  )
  
}

export default Block;