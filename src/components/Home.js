import React from 'react';
import MagicCard from './MagicCard'
import FilterName from '../Filters/FilterName'


class Home extends React.Component {
  render() {
    return(
      <React.Fragment>
      <h1>Mis magos favoritos</h1>
      <FilterName 
        handleFilter={this.props.handleFilter}
       />
      <ul className="list">
      {this.props.characters
        .filter(item => item.name.toLocaleLowerCase().includes(this.props.filterName))
        .map(item => {
        return (
          <li className="list-elements" key={item.id}>
            <MagicCard 
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
export default Home;