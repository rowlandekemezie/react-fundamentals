import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {val: 0};
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({val: this.state.val + 1});
  }

  componentWillMount() {
    console.log('Mounting');
    this.setState({m: 2});
  }
  componentDidMount() {
    console.log('Mounted');
    this.inc = setInterval(this.update, 500);
    // console.log(ReactDOM.findDOMNode(this));
  }
  render() {
    console.log('Rendering');
    return (
      <div>
        <button onClick={this.update}>{this.state.val * this.state.m}</button>
      </div>
    );
  }
  componentWillUnmount() {
    console.log('Unmounted');
    clearInterval(this.inc);
  }
}

export class Wrapper extends React.Component {
  constructor() {
    super();
  }
  mount() {
    ReactDOM.render(<App />, document.getElementById('a'));
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }
  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
         <button onClick={this.unmount.bind(this)}>Unmount</button>
         <div id="a"></div>
      </div>
    );
  }
}

ReactDOM.render(<Wrapper />, document.getElementById('app'));
