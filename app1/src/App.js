
import Navbar from './components/navbar';
import Counters from './components/counters';
import './App.css'
import { Component } from 'react';

class App extends Component {
  state={
    counters:[
      {id:1,value:0},
      {id:2,value:2},
      {id:3,value:0},
      {id:4,value:0}
    ]
  };

  handleIncrement = (counter) =>{
  // '...' are used for clonig/copying objects
  const counters=[...this.state.counters];
  const index=counters.indexOf(counter);
  counters[index]={...counter};
  counters[index].value++;
  this.setState({counters});
  };
  handleDecrement = (counter) =>{
    // '...' are used for clonig/copying objects
    const counters=[...this.state.counters];
    const index=counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value--;
    this.setState({counters});
    };

  handleDelete=(counterId)=>{
    const counters=this.state.counters.filter(c=> c.id !==counterId);
    this.setState({counters:counters});
  };

  handleReset =()=>{
    const counters=this.state.counters.map(d =>{
      d.value=0;
      return d;
    });
    this.setState({counters});
  };
render(){
  return (<>
  <Navbar 
  totalCounters={this.state.counters.filter(c => c.value>0).length}/>
  <main className="container">
  <Counters 
  counters={this.state.counters}
  onReset={this.handleReset}
  onIncrement={this.handleIncrement}
  onDecrement={this.handleDecrement}
  onDelete={this.handleDelete}
  />
  </main>

  </>
  );
}}

export default App;