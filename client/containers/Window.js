import React, { useState, useEffect } from 'react';
import useWindowDimensions from '../components/windowSizeHook';
import MainContainer from './MainContainer';
import { GameToolbar, NavBar, ScoreFooter } from '../components/components'


export default function Window ({ }) {
  const [gameWidth, setGameWidth] = useState(null);
  const [gameHeight, setGameHeight] = useState(null);
  const [barWidth, setBarWidth] = useState(null);
  const [barHeight, setBarHeight] = useState(null);
  const [fontSize, setFontSize] = useState(null);
  const [score, setScore] = useState(0);
  const [mark, setMark] = useState(0);
  const [point, setPoint] = useState('(POINT :   0)')
  const [boardSize, setBoardSize] = useState(10);
  const { height, width } = useWindowDimensions();
  
  useEffect(() => {
    if ( height / width > (boardSize * 100) / 2000 ) {
      setGameWidth('75vw');
      setGameHeight( '37.5vw' );
      setBarHeight('1.875vw')
      setFontSize('1.25vw')
    } else {
      setGameHeight( '75vh' );
      setGameWidth( '150vh' );
      setBarHeight( '3.75vh' )
      setFontSize('2.5vh')
    }
  }, [height])

  useEffect(() => {
    
  
  }, [])

  return (
    <div
      fontSize={fontSize}
    >
      
      <GameToolbar 
        height={barHeight} 
        width={gameWidth} 
        fontSize={fontSize}
      />
      <NavBar 
        height={barHeight} 
        width={gameWidth} 
        fontSize={fontSize}
      />
      <MainContainer 
        height={gameHeight}
        width={gameWidth}
        fontSize={fontSize}
        mark={mark} 
        point={point} 
        score={score} 
        setMark={setMark} 
        setPoint={setPoint} 
        setScore={setScore} 
      />
      <ScoreFooter 
        fontSize={fontSize}
        height={barHeight} 
        width={gameWidth} 
        mark={mark} 
        point={point} 
        score={score} 
      />
    </div>
  )
  
}
