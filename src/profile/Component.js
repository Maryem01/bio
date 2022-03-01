import React, { Component } from "react";
class Information extends Component {
  render() {
    return (
      <div>
        {this.props.name} <br/>
        {this.props.quotes} <br/>
        {this.props.job} <br/>
        {this.props.children}
      </div>

      
    );
  }
}

export default Information;
