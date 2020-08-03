import React from 'react'
import Counter from '../Counter'

class CounterGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            size: 0,
            totalValue: 0
        };
    }

    handleResize = (event) => {
        this.setState({
            size: event.target.value ? parseInt(event.target.value) : 0,
            totalValue: 0
        });
    };

    handleIcrease = () => {
        this.setState((prevState) => ({
            totalValue: prevState.totalValue + 1
        }));
    }

    handleReduce = () => {
        this.setState((prevState) => ({
            totalValue: prevState.totalValue - 1
        }));
    }

    render() {
        const initArray = [...Array(this.state.size).keys()];

        return <div>
            <label>Group Size : </label>
            <input onBlur={this.handleResize} defaultValue={0} /><br />
            <label>Total Value : {this.state.totalValue}</label>

            {
                initArray.map(key => <Counter size={this.state.size} onIcrease={this.handleIcrease} onReduce={this.handleReduce} key={key} />)
            }
        </div>
    }

}

export default CounterGroup;