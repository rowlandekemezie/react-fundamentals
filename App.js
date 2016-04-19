import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    };
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    });
  }

  render() {
   // let cat = this.cat;
    return (
      <div>
        <Slider ref="red" update={this.update} />
        {this.state.red}
        <br />
        <Slider ref="green" update={this.update} />
        {this.state.green}
        <br />
        <Slider ref="blue" update={this.update} />
        {this.state.blue}
      </div>
    );
  }
}

//  Refs is a way to reference the instance of our component in an application
class Slider extends React.Component {
  render() {
    return (
      <div>
        <input ref="inp"
        type="range"
        onChange={this.props.update}
        min="0"
        max="255" />
      <h3> Testing our features for refs </h3>
      </div>
    );
  }
}
App.propTypes = {
  cat: React.PropTypes.number.isRequired,
  text: React.PropTypes.string.isRequired
};

App.defaultProps = {
  text: 'This is the default value'
};

ReactDOM.render(
  <App cat={5} />, document.getElementById('app')
);
