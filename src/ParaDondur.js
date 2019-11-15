import React, { Component } from 'react'
import Para from './Para';
import './ParaDondur.css';

class ParaDondur extends Component {
    state = {
        side: "",
        donuyor: false,
        flip: [] 
    }
    
// CONSTRUCTOR ile:
/* constructor(props){
    super(props);
    this.state = {
        side: "",
        donuyor: false,
        flip: [] 
    }
}*/
        
    handleClick = () => {
        let turn = Math.floor(Math.random() * 2);
        const finalSide = turn === 0 ? "tura" : "yazı";
        this.setState({ donuyor: true }, () => {
        setTimeout(() => {
            this.setState({
            donuyor: false,
            side: finalSide,
            flip: [...this.state.flip, finalSide]
            });
            console.log(this.state.flip);
        }, 1000);
        });
    };
    
    tura = () => {
        let tura = this.state.flip.filter(value => value === "tura");
        return tura.length;
    };
    
    yazı = () => {
        let yazı = this.state.flip.filter(value => value === "yazı");
        return yazı.length;
    };


    render() {
        return (
            <div className="ParaDondur">
                <h2>Coin Heads and Tails</h2>
                <Para side={this.state.side} donuyor={this.state.donuyor} />
        <br></br>
        <button type="button" className="btn btn-dark" onClick={this.handleClick} >Click</button>
        <p>
        Total:
            <strong> {this.state.flip.length} </strong>
        <br></br>
            <strong> {this.yazı()} </strong>
        Head,
            <strong> {this.tura()} </strong>
        Tails.</p>
                
            </div>
        )
    }
}

export default ParaDondur;
