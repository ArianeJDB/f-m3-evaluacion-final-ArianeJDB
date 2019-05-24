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
      <p>{find.name}</p>
    : <p>NO</p> }
     <Link to="/">Volver</Link>
    </React.Fragment>
    );
  }
}
export default CharacterDetail;