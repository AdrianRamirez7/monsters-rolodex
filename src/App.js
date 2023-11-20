import { Component } from 'react'
import './App.css';

class App extends Component {
  constructor () {
    super()
    
    this.state = {
     monsters: [
        {
         name: 'Linda',
         id: '244sdf3'
        },
        {
          name: 'Frank',
          id: '2523rf'
        },
        {
          name: 'Jackie',
          id: '2234f'
        },
        {
          name: 'Andrei',
          id: '2r43fwf'
        },
      ]
    }
  }


  //render is going to check the class above
 
  render () {
    return (
      <div className="App">
            {
              this.state.monsters.map((monster) => {
                return <div key={monster.id}><h1>{monster.name}</h1></div>
              })}
        </div>
        );
      }
    }

export default App;


