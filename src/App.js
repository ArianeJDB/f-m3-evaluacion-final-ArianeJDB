import React from 'react';
import {fetchCharacters} from './services/fetchCharacters';
import './App.scss';


class App extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
     characters: [],
   }
 }
componentDidMount(){
  this.getCharacters();
}

 getCharacters(){
   fetchCharacters()
    .then(data => {
      console.log('data', data)
      const newData = data.map((item, index) => {
        return {...item, id:index};
      });

      this.setState({
        characters: newData
        
      })
      console.log('cha', this.state.characters);
      
    });
    
 }
 
  render() {
    // const {characters} = this.state;
   return (
     <React.Fragment>
    <h1>Mis magos favoritos</h1>
    <ul className="list">
      {this.state.characters.map(item => {
        return (
          <li className="list-elements">
            {item.name}
          </li>
        )
      })}
    </ul>
    </React.Fragment>
   );
 }
}

export default App;
