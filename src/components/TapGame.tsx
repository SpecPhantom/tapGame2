import React, { useEffect, useState } from 'react';
import "./Style.css"
import ScorePage from './ScorePage/ScorePage'
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';


const TapGame = () => {
    const [clickCount, setClickCount] = useState(0)
    const [autoClickerCount, setAutoClickerCount] = useState(0)
    const [levelAutoClicker, levelUPAutoClicker] = useState(0)
    const [Money, setMoney] = useState(0)
    const [levelMoneyGen, levelUPMoneyGen] = useState(0)
    const [levelClicker, levelUPClicker] = useState(0)
    const [MoneyPerTap, setMoneyPerSec] = useState(5)
    let MaxLevelClicker, MaxLevelMoneyGen, MaxLevelAutoClicker = false

    const handleTap = () => {
      setClickCount((clickCount + (1 * (levelClicker + 1))))
      setMoney(Money + (MoneyPerTap * (levelClicker + 1)))
    };

    const handleBuyAutoClicker = () => {
      if (levelAutoClicker < 10) 
      {
          if (Money >= (20 * (levelAutoClicker + 1))){
            levelUPAutoClicker(levelAutoClicker + 1)
            setMoney(Money - (20 * (levelAutoClicker + 1)))
            setAutoClickerCount(autoClickerCount + 1)
          }
      }else
      {
        MaxLevelAutoClicker = true
      }
      
    };
    const handleMoneyGen = () => {
      if(levelMoneyGen < 10)
      {
          if((Money >= (10 * (levelMoneyGen + 1))) ) {
          levelUPMoneyGen(levelMoneyGen + 1)
          setMoney(Money - (10 * (levelMoneyGen + 1)))
          setMoneyPerSec(MoneyPerTap + 5)
        }
      }else
      
      {
        MaxLevelMoneyGen = true
      }
      
    }

    const handleTapCount = () => {
      if (levelClicker < 10)
      {
          if((Money >= (5 * (levelClicker + 1))) )
        {
          levelUPClicker(levelClicker + 1)
          setMoney(Money - (5 * (levelClicker + 1)))
        }
      }else
      {
        MaxLevelClicker = true
      }
      
    }

    useEffect(() => {
      const autoClickerInterval = setInterval(() => {
        setClickCount((prevCount) => prevCount + autoClickerCount);
        setMoney((prevMoney) => prevMoney + (autoClickerCount * MoneyPerTap))
      }, 1000);
  
      return () => clearInterval(autoClickerInterval);
    }, [autoClickerCount]);
    
    return (
        <div>
          <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
          <Button onClick={handleTap}>Click me!</Button>
          </Box>
              
          <p>Click Count: {clickCount}</p>
          <p>Money: {Money}</p>
          <button onClick ={handleBuyAutoClicker}>Buy Auto Clicker {levelAutoClicker !== 0 &&<span>{levelAutoClicker} </span>}</button>
          <button onClick={handleMoneyGen}>Buy Money Gen {levelMoneyGen !== 0 && <span>{levelMoneyGen}</span>}</button>
          <button onClick={handleTapCount}>Buy Tap Count {levelClicker !== 0 && <span>{levelClicker}</span>}</button>
          <p>Auto Clicker Count: {autoClickerCount}</p>
          <p>MpTap Count: {(MoneyPerTap * autoClickerCount)}</p>
          <p>CpT Count: {((levelClicker + 1))}</p>
        </div>
      );
};

export default TapGame;
