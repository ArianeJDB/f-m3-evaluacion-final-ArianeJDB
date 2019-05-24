import React from 'react';
import './App.scss';
import {fetchCharacters} from './services/fetchCharacters';
import Home from './components/Home';
import FilterName from './Filters/FiterName';
import {Switch, Route} from 'react-router-dom';


class App extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
     characters: [],
     filterName: ''
   }
   this.handleFilter = this.handleFilter.bind(this);
 }
componentDidMount(){
  this.getCharacters();
}

 getCharacters(){
   fetchCharacters()
    .then(data => {
      const newData = data.map((item, index) => {
        return {...item, id:index};
      });

      this.setState({
        characters: newData
      })
    });
 }
 
 handleFilter(e) {
   const value = e.currentTarget.value;

   this.setState({
     filterName: value
   })
 }
  render() {
   return (
     <React.Fragment>
     <h1>Mis magos favoritos</h1>
     <Switch>
       <Route exact path="/" render={() => 
        <Home
          characters={this.state.characters}
          filterName={this.state.filterName}
          handleFilter={this.handleFilter}
       />
       }
      />
     </Switch>
     <FilterName 
     handleFilter={this.handleFilter}
     />

     <Home 
       characters={this.state.characters}
       filterName={this.state.filterName}
       handleFilter={this.handleFilter}
     />
     </React.Fragment>
   );
 }
}

export default App;
