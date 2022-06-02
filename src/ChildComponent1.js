import { Component } from "react";
import { MyContext } from "./App";

export default class ChildComponent1 extends Component {
    constructor(props) {
        super(props);
    }

    getStyle(isClicked) {
        return {
            backgroundColor: isClicked ? '#333' : '#CCC',
            color: isClicked ? '#CCC' : '#333',
            padding: '2rem',
            margin: '2rem'
        }
    }

    render() {
        return(
            <>
                <MyContext.Consumer>
                    {clicked => <div style={this.getStyle(clicked)}>Component 1</div>}
                </MyContext.Consumer>
            </>
        )
    }
}