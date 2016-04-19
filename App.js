import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <Button>I<Heart />React</Button>
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <div>
        <button>{this.props.children}</button>
      </div>
    );
  }
}

const Heart = () => {
  return (
    <div>
      <span className="glyphicon glyphicon-heart"></span>
    </div>
  );
};

ReactDOM.render(
  <App />, document.getElementById('app')
);
