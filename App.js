import React from 'react';
import ReactDOM from 'react-dom';

  
  class App extends React.Component {
  
    render(){
      return (
        <div>
          <Button>Glory<Heart />React</Button>
        </div>
      );
    }
  }

  
  class Button extends React.Component {
      
      render() {
          return (<div><button>{this.props.children}</button></div>)
      }
  }
  
  const Heart = () => 
     <span className="glyphicon glyphicon-heart">Heart</span>
  
ReactDOM.render(
  <App cat={5} />, document.getElementById('app')
);
