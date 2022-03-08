import React from "react";
import "./styles.css";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      toggle : false,
    }
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(){
    this.setState({
      toggle: !this.state.toggle
    });
  }

  render(){
    return(
      <>
        <input type="checkbox" value={this.state.toggle} onChange={this.handleEvent} />
        <h3>{this.state.toggle?"On": "Off"}</h3>
      </>
    );
  }
}
export default  App;