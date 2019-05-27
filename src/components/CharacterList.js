import React from 'react';
import CharacterCard from './CharacterCard'



class CharacterList extends React.Component {
  render() {
    return(
      <React.Fragment>
      <ul className="list">
      {this.props.characters
        .filter(item => {
          if(!this.props.filterHouses.length) {
            return true
          } else {
            return this.props.filterHouses.includes(item.house)
          }
        }) 
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
export default CharacterList;