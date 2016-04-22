import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {increasing: false};
    this.update = this.update.bind(this);
  }

  update() {
    console.log("This is test for component will update");
    ReactDOM.render(<App val={this.props.val + 1} />,
      document.getElementById('app')
   );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({increasing: nextProps.val > this.props.val});
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
  }
  render() {
    console.log('Rendering');
    console.log(this.state.increasing);
    return (
      <div>
        <button onClick={this.update}>{this.props.val}</button>
      </div>
    );
  }
}

App.defaultProps = {val: 0};

ReactDOM.render(<App />, document.getElementById('app'));
