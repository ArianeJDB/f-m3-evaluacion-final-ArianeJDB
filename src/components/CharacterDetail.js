import React from 'react';
import {Link} from 'react-router-dom';

class CharacterDetail extends React.Component {
  render() {
    const {characters} = this.props;
    
    const magicId = parseInt(this.props.takeParams.match.params.magic);

    const find = characters.find(item => item.id === magicId);

    
    return(
      <React.Fragment>
      {find !== undefined ? 
      <div>
        <img src={find.image} alt={find.name}/>
        <h2>{find.name}</h2>
        <p>House: {find.house}</p>
        <p>Year of birth: {find.yearOfBirth}</p>
        <p>Patronus: {find.patronus}</p>
        <p>{find.alive ? 'Está vivito y coleando' : 'Se murió muerto =('}</p>
      </div>
    : 
    <p>=( eres muy muggle para tanta magia</p> }
     <Link to="/">Volver</Link>
    </React.Fragment>
    );
  }
}
export default CharacterDetail;