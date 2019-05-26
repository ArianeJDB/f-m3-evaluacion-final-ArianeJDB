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
     filterHouses: ''
     
   }
   this.handleFilterName = this.handleFilterName.bind(this);
   this.handleFilterHouses = this.handleFilterHouses.bind(this);
   this.resetFilterName = this.resetFilterName.bind(this);
   //this.saveData = this.saveData.bind(this);
 }
componentDidMount(){
  this.getCharacters();
  // const getItem = JSON.parse(localStorage.getItem('list'));
  //   if (getItem !== null) {
  //     this.setState({
  //       characters: getItem
  //     });
}

resetFilterName(){
  this.setState({
    filterName: ''
  });
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
   const value = e.currentTarget.value;
   const checked = e.currentTarget.checked;

   this.setState({
     filterHouses:[checked ? this.state.filterHouses.concat(value) : this.state.filterHouses.filter(item => item !== value)]
   })
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
          filterHouses={this.state.filterHouses}
       />
       }
       />
       <Route path="/detail/:magic" render={(takeParams) => 
        <CharacterDetail 
          takeParams={takeParams}
          characters={this.state.characters}
          resetFilterName={this.resetFilterName}
        />
       }
       />
     </Switch>
     </React.Fragment>
   );
 }
 //localStorage.setItem('list', JSON.stringify());
}


export default App;
