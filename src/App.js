import { Component, createContext } from "react";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

export const MyContext = createContext();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }
  render() {
    return (
      <MyContext.Provider value={this.state.clicked}>
      <button onClick={() => this.setState({clicked: !this.state.clicked})}>Change theme</button>
      <ChildComponent1 />
      <ChildComponent2 />
    </MyContext.Provider>
    );
  }
}