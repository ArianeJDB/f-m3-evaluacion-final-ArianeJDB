import React from 'react';
import './App.scss';
import {fetchCharacters} from './services/fetchCharacters';
import Home from './components/Home';
import {Switch, Route} from 'react-router-dom';
import CharacterDetail from './components/CharacterDetail'


class App extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
     characters: [],
     filterName: '',
     filterHouses: []
     
   }
   this.handleFilterName = this.handleFilterName.bind(this);
   this.handleFilterHouses = this.handleFilterHouses.bind(this);
  // this.selectHouse = this.selectHouse.bind(this);
   //this.handle = this.handle.bind(this);
   
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
 
 handleFilterName(e) {
   const value = e.currentTarget.value;

   this.setState({
     filterName: value
   })
 }

 handleFilterHouses(e) {
   const {value} = e.currentTarget;
   console.log(value); 
 }
  render() {
   return (
     <React.Fragment>
     <Switch>
       <Route exact path="/" render={() => 
        <Home
          characters={this.state.characters}
          filterName={this.state.filterName}
          handleFilterName={this.handleFilterName}
          handleFilterHouses={this.handleFilterHouses}
          //handle={this.handle}
       />
       }
       />
       <Route path="/detail/:magic" render={(takeParams) => 
        <CharacterDetail 
          takeParams={takeParams}
          characters={this.state.characters}
        />
       }
       />
     </Switch>
     </React.Fragment>
   );
 }
}

export default App;
