import React from 'react';
import ReactDOM from 'react-dom';

const Mixin = InnerComponent => class extends React.Component {
  constructor() {
    super();
    this.state = { val: 0 };
    this.update = this.update.bind(this);
  }
  update() {
    this.setState({
      val: this.state.val + 1 });
  }
  componentWillMount() {
    console.log('component will mount phase');
  }
  componentDidMount() {
    console.log('mounted');
  }
  render() {
    return (
      <InnerComponent
        update={this.update}
        {...this.props}
        {...this.state}
      />
    );
  }
};

const Button = (props) => <button onClick={props.update}>{props.txt} - {props.val}</button>;

const Label = (props) => <label
  onMouseMove={props.update}>{props.txt} - {props.val}</label>;

let ButtonMixed = Mixin(Button);
let LabelMixed = Mixin(Label);

class App extends React.Component {
  render() {
    return (
      <div>
        <ButtonMixed txt="Button" />
        <LabelMixed txt="Label" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
