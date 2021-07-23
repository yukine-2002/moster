import { Component } from 'react';
import './App.css';
import {CardlistData} from './component/card-list/card-list.component';
import {SearcgBox} from './component/searchBox/searchBox.component';
class App extends Component{

  constructor(){

    super();

    this.state = {
      monster : [],
      searchFiled : ''
    }
  };

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({monster: data}))
  }

  render(){
  const {monster,searchFiled} = this.state;
  const filterData = monster.filter(
    (value) => value.name.toLowerCase().includes(searchFiled.toLocaleLowerCase())
  )
    return (
      <div className="App">
        <SearcgBox placeholder = "search Monster" Handle ={ (e) => this.setState ( { searchFiled : e.target.value } ) } />
        <CardlistData  data = {filterData} />
      </div>
    );
  }
} 

export default App;
