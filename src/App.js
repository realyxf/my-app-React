import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import * as Action from "./Component/Counter/Action";
import { connect } from "react-redux";
import CounterGroup from './Component/CounterGroup'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterGroup/>
      </header>
    </div>
  );
}

export default App;


// class App extends Component {

//   render() {
    
//     const { increment, decrement } = this.props;

//     return (
//       <div className="App">
//         <header className="App-header">
//         <button onClick={() => decrement()}>-</button>
//         <label>{this.props.count}</label>
//         <button onClick={() => increment()}>+</button>
//         </header>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   count: state
// });

// export default connect(mapStateToProps,Action)(App);

//onIncrement={() => store.dispatch({ type: 'INCREMENT' })}