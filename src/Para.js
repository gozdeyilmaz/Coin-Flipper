import React from 'react';
import './Para.css';
import CoinTura from './tura.jpeg';
import CoinYazi from './yazı.jpeg';

const Para = (props) => {
  return (
    <div className="Coin-container">
      <div className={`Coin ${props.donuyor ? 'Coin-rotate' : ''}`}>
        <img src={CoinTura} className={(props.side === 'yazı' ? 'Coin-back' : 'Coin-front')} />
        <img src={CoinYazi} className={(props.side === 'yazı ' ? 'Coin-front' : 'Coin-back')} />
      </div>
    </div>
  )
}

export default Para;
