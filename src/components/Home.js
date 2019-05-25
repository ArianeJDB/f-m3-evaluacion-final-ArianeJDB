import React from 'react';
import FilterName from '../Filters/FilterName';
import CharacterList from './CharacterList'

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>
        <h1 className='title'>Mis magos favoritos</h1>
        <FilterName 
          characters={this.props.characters} 
          handleFilter={this.props.handleFilter} 
          filterName={this.props.filterName}
        />
        </header>
        <CharacterList 
          characters={this.props.characters} 
          filterName={this.props.filterName}
        />
      </React.Fragment>
    );
  }
}

export default Home;