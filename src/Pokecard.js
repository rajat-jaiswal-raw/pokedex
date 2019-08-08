import React,{Component} from 'react';
import './Pokecard.css';

class Pokecard extends Component{
  render(){
    function getImg(num) {
      return `https://pokeres.bastionbot.org/images/pokemon/${num}.png`;
    }
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-image">
          <img width="100px" src={getImg(this.props.id)} alt={this.props.name}></img>
        </div>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">EXP: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;