import React from 'react';
import './Button.css';

class Button extends React.Component {
    render() {
    return <button type={this.props.type} className="button"><i></i>{this.props.name}</button>;
    }
}

export default Button;
