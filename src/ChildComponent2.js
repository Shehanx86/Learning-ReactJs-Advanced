import { useContext } from "react";
import { MyContext } from "./App";

export default function ChildComponent2() {
 const clicked = useContext(MyContext);

 function getStyle(isClicked) {
    return {
        backgroundColor: isClicked ? '#333' : '#CCC',
        color: isClicked ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
 }

 return(
        <div style={getStyle(clicked)}>Component 2</div>
 )
}