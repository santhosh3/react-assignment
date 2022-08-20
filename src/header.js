import React from "react";

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }
    increaseCount() {
        this.setState({
            count: this.state.count+1
        })
    }
    decreaseCount() {
        this.setState({
            count: this.state.count-1
        })
    }
    render() {
        return (
            <div className="count-component">
            <p>Count - {this.state.count}</p>
            <input type="number" value={this.state.count} />
            <button onClick={() => {this.increaseCount()}}>+Increase</button>
            <button onClick={() => {this.decreaseCount()}}>-Decrease</button>
            </div>
        )
    }
}
export default Counter