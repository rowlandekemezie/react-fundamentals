import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      great: 'This is a constructor thing'
    };
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({great: e.target.value});
  }

  render() {
    let cat = this.cat;
    return (
      <div>
        <h3>{this.props.text}, {cat} </h3>
        <Widget great = {this.state.great}
        update={this.update} counter={this.state.counter} click={this.click} />
        <Widget great = {this.state.great}
         update={this.update} counter={this.state.counter} click={this.click} />
        <Widget great = {this.state.great}
         update={this.update} counter={this.state.counter} click={this.click} />
        <Widget great = {this.state.great}
         update={this.update} counter={this.state.counter} click={this.click} />
      </div>
    );
  }
}

// A new component to illustrate the composite example
// using a stateless function
// Refs will not work with stateless function
const Widget = (props) => {
  return (
    <div>
      <input type="text" onChange={props.update}/>
      <h1>{props.great}</h1>
  </div>
  );
};

App.propTypes = {
  cat: React.PropTypes.number.isRequired,
  text: React.PropTypes.string.isRequired
};

App.defaultProps = {
  text: 'This is the default value'
};

ReactDOM.render(
  <App cat={5} />,
  document.getElementById('app')
);
// A stateless function component
// This means that this compoinent will not have a state
// const App = () => <div> Hello world </div>;

// export default App;
