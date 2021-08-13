import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.position = null
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  }


  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}
class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
    this.position = "relative";

  }
}
export { InfoAlert };

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
    this.position = "relative";

  }
}
export { ErrorAlert };

class OfflineAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
    this.position = "relative";

  }
}
export { OfflineAlert };