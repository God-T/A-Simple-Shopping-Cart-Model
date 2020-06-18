import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1, temp: { k: "k1", v: "v1" } },
      { id: 2, value: 2, temp: { k: "k2", v: "v2" } },
      { id: 3, value: 3, temp: { k: "k3", v: "v3" } },
      { id: 4, value: 4, temp: { k: "k4", v: "v4" } },
    ],
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  //invoke after any updates with props or states
  componentDidUpdate(prevProps, prevState) {
    //console.log("app - update");
    //decide whether we can make Ajax call based on previous props or State
  }

  //invoke before any removements of the components
  //(react compare visual DOM with real DOM before display)
  componentWillUnmount() {
    //console.log("app - unmount");
  }

  //invoke after the render()
  componentDidMount() {
    //Ajax Call - update data
    //this.setState({})
  }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = (counterID) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterID
    );
    this.setState({ counters });
    console.log("id= " + counterID);
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
