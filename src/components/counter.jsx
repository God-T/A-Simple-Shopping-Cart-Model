import React, { Component } from "react";

export default class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   tags: [],
  //   // tags: ["tag1", "tag2", "tag3"],
  //   // imageUrl: "https://picsum.photos/200",
  // };

  //   styles = {
  //     fontSize: 10,
  //     fontWeight: "bold",
  //   };

  //   constructor() {
  //     super();
  //     this.handleIncrement.bind(this);
  //   }

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  componentWillUnmount() {
    //console.log("counter - unmount");
  }

  // //invoke after any updates with props or states
  // componentDidUpdate(prevProps, prevState) {
  //   //console.log("counter - update");
  //   //decide whether we can make Ajax call based on previous props or State
  // }

  render() {
    return (
      <div>
        {/* {this.props.children} */}
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-3"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && <p>"plz add new tags!"</p>} */}
        {/* {this.renderTags()} */}
      </div>
    );
  }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>no tags!</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}> {tag} </li>
  //       ))}
  //     </ul>
  //   );
  // }

  getBadgeClasses() {
    let classes = "badge m-3 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
