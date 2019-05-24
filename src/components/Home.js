import React from 'react';
import MagicCard from './MagicCard'
import FilterName from '../Filters/FilterName'
import {Link} from 'react-router-dom';

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
        .filter(item => item.name.includes(this.props.filterName))
        .map(item => {
        return (
          <li className="list-elements" key={item.id}>
            <MagicCard 
              image={item.image}
              name={item.name}
              house={item.house}/>
            <Link to={`/detail/${item.id}`}>Ver más</Link>
          </li>
        )
      })}
    </ul>
    </React.Fragment>
    );
  }
}
export default Home;