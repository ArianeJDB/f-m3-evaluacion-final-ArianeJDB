import React from 'react';
import MagicCard from './MagicCard'

class MagicList extends React.Component {
  render() {
    return(
      <ul className="list">
      {this.props.characters.map(item => {
        return (
          <li className="list-elements" key={item.id}>
            <MagicCard 
              image={item.image}
              name={item.name}
              house={item.house}/>
          </li>
        )
      })}
    </ul>
    );
  }
}
export default MagicList;