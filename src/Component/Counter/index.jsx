import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            size: 0
        }
    }

    onIcrease = () => {
        this.setState((prevState) => ({
            value: prevState.value + 1
        }));
        this.props.onIcrease();
    }

    onReduce = () => {
        this.setState((prevState) => ({
            value: prevState.value - 1
        }));
        this.props.onReduce();
    }

    static getDerivedStateFromProps(props, state) {

        if (props.size !== state.size) {
            return {
                size: props.size,
                value: 0
            };
        }
        return null;
    }

    render() {
        return (
            <div>
                <button onClick={this.onReduce}>-</button>
                <label>{this.state.value}</label>
                <button onClick={this.onIcrease}>+</button>
            </div>
        )
    }
}

export default Counter;