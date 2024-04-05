import React, { Component } from "react";
import io from "socket.io-client";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      msg: ""
    };
  }
  componentDidMount() {
    const socket = io.connect("/");
    socket.on("msg", (data) => {
      this.setState = ({
        msg: data,
      })
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
      </div>
    ); 
  }
}

export default App;
