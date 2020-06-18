import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  componentWillUnmount() {
    //console.log("counters - unmount");
  }

  //invoke after any updates with props or states
  componentDidUpdate(prevProps, prevState) {
    //console.log("counters - update");
    //decide whether we can make Ajax call based on previous props or State
  }

  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          >
            {/* <h4>Counter #{counter.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}
