import React from 'react';
import {Link} from 'react-router-dom';

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
          <h2>{find.name}</h2>
          <p>House: {find.house}</p>
          <p>Year of birth: {find.yearOfBirth}</p>
          <p>Patronus: {find.patronus}</p>
          <p>{find.alive ? 'Está vivito y coleando' : 'Se murió muerto =('}</p>
        </div>
      </div>
    : 
    <p>=( eres muy muggle para tanta magia</p> }
      <Link to="/">Volver</Link>
    </React.Fragment>
    );
  }
}
export default CharacterDetail;