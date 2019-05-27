import React from 'react';
import {Link} from 'react-router-dom';
class CharacterCard extends React.Component {
  render() {
    return(
      <div className="magic-card">
        <img src={this.props.image} alt={this.props.name} className='img' />
        <h2>{this.props.name}</h2>
        <div className='house-container'>
          <img className="house-img" alt={this.props.house} src={this.props.house === 'Gryffindor' ? 'https://images-na.ssl-images-amazon.com/images/I/81mv7IXpc6L._SY606_.jpg' : this.props.house === 'Slytherin' ? 'https://images-na.ssl-images-amazon.com/images/I/61n%2B3Bsn6PL._SY606_.jpg': this.props.house === 'Hufflepuff' ? 'https://i.ebayimg.com/images/i/282998706270-0-1/s-l1000.jpg' : this.props.house === 'Ravenclaw' ? 'https://elenanofriki.com/3664-large_default/placa-metalica-ravenclaw-harry-potter.jpg' : <p>No es de Hogwarts</p>}/>
        <p>{this.props.house}</p>
        </div>
        <Link to={`/detail/${this.props.id}`} className="more">Ver más</Link>
      </div>
    );
  }
}
export default CharacterCard;