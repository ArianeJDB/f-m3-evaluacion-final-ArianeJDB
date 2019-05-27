import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard'
import PropTypes from 'prop-types';
import './CharacterList.scss';


class CharacterList extends React.Component {
  render() {
    return(
      <React.Fragment>
      <ul className="list">
      {this.props.characters
        .filter(item => 
          item.house.includes(this.props.filterHouses))
        .filter(item => item.name.toLocaleLowerCase().includes(this.props.filterName))
        .map(item => {
        return (
          <li className="list-element" key={item.id}>
            <CharacterCard 
              image={item.image}
              name={item.name}
              house={item.house}
              id={item.id}
              />
            
          </li>
        )
      })}
    </ul>
    </React.Fragment>
    );
  }
}

CharacterList.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
  house: PropTypes.string,
  characters: PropTypes.arrayOf(PropTypes.object),
  filterHouses: PropTypes.string,
  filterName: PropTypes.string
}

export default CharacterList;