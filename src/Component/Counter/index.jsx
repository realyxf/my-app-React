import React, { Component } from "react";
import * as Action from "./Action";
import { connect } from "react-redux";

class Counter extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         value: 0,
    //         size: 0
    //     }
    // }

    // onIcrease = () => {
    //     this.setState((prevState) => ({
    //         value: prevState.value + 1
    //     }));
    //     this.props.onIcrease();
    // }

    // onReduce = () => {
    //     this.setState((prevState) => ({
    //         value: prevState.value - 1
    //     }));
    //     this.props.onReduce();
    // }

    // static getDerivedStateFromProps(props, state) {

    //     if (props.size !== state.size) {
    //         return {
    //             size: props.size,
    //             value: 0
    //         };
    //     }
    //     return null;
    // }

    render() {

        const { increment, decrement } = this.props;


        return (
            <div>
                <button onClick={() => increment()}>-</button>
                <label>{this.props.count}</label>
                <button onClick={() => increment()}>+</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    count: state
  });

//export default Counter;

export default connect(mapStateToProps,Action)(Counter);