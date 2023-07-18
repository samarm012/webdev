import React, {Component} from "react";
class Counter extends Component {
  state = {
    value:this.props.counter.count,
  };
  handleIncrement = () => {
    let s1 ={...this.state};
    s1.value++;
    this.setState(s1);
  }
  render() {
    console.log("Props", this.props);
    const {counter , onDelete} = this.props;
    return (
      <h5>
        Counter {counter.alphabet} Count={this.state.value}
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={() => this.handleIncrement()}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(counter.id)}
        >
          Delete
        </button>
      </h5>
    );
  }
}
export default Counter;
