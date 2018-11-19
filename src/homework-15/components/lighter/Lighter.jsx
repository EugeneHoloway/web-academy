import * as React from 'react';







/*
import './Lighter.scss';

function Lighter() {
    return (
<div className="lighter__red"></div>
<div className="lighter__yellow"></div>
<div className="lighter__green"></div>
    );
  }

  ReactDOM.render(<Lighter/>, document.getElementById('root'));
*/






//working example

export class Lighter extends React.Component {
constructor() {
    super();
    this.state = {
        isActive: true
    }
}

toggle() {
    this.setState({
        isActive: !this.state.isActive
    });
}

    render() {
        let dynamicStyles;
        if (this.state.isActive === true) {
            dynamicStyles = { backgroundColor: 'red' };
        } else {
            dynamicStyles = { backgroundColor: 'transparent' };
        }

        return <div className="lighter">
        <div style={dynamicStyles} className="lighter__lamp"></div>
        <button className="lighter__control" onClick={this.toggle.bind(this)}>TOGGLE</button>
        </div>
    }
}







//another example:
/*
   delayState: function() {
        setTimeout(() => {
            this.setState({
            clicked: false
          })
        }, 2000);
    },

*/