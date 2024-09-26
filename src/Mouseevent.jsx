export default function MouseEvent(){
    return (<h1 onClick={e=>alert("onClick")}
    onMouseEnter={e=>alert("OnMouseEnter")}
    onMouseOver = {e =>console.log("OnMouseOver")}> Click me! </h1>);
}