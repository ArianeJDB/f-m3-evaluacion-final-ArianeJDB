import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class CharacterDetail extends React.Component {

 componentWillUnmount() {
    this.props.resetFilterName();
  }

  render() {
    const {characters} = this.props;
    
    const magicId = parseInt(this.props.takeParams.match.params.magic);

    const find = characters.find(item => item.id === magicId);

    
    return(
      <React.Fragment>
      {find !== undefined ? 
      <div className="body-detail">
        <div className="detail">
          <img src={find.image} alt={find.name} className="detail-img" />
          <h2 className="title-detail">{find.name}</h2>
          <img className="detail-house-img" alt={this.props.house} src={find.house === 'Gryffindor' ? 'https://images-na.ssl-images-amazon.com/images/I/81mv7IXpc6L._SY606_.jpg' : find.house === 'Slytherin' ? 'https://images-na.ssl-images-amazon.com/images/I/61n%2B3Bsn6PL._SY606_.jpg': find.house === 'Hufflepuff' ? 'https://i.ebayimg.com/images/i/282998706270-0-1/s-l1000.jpg' : find.house === 'Ravenclaw' ? 'https://elenanofriki.com/3664-large_default/placa-metalica-ravenclaw-harry-potter.jpg' : <p>No es de Hogwarts</p>}/>
          <p>Year of birth: {find.yearOfBirth}</p>
          <p>Patronus: {find.patronus}</p>
          <p>{find.alive ? 'Está vivito y coleando' : 'Se murió muerto =('}</p>
        </div>
        <Link to="/">Volver</Link>
      </div>
    : 
    <p>=( eres muy muggle para tanta magia</p> }
      
    </React.Fragment>
    );
  }
}

CharacterDetail.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
  characters: PropTypes.arrayOf(PropTypes.object),
  house: PropTypes.string,
  id: PropTypes.number
} 
export default CharacterDetail;