import React, {Component} from 'react';

import './button.css';
class Button extends Component {
    render() {
        return (
            <div className="button">
               <button className='button-start'>Start</button>
               <button  className='button-stop'>stop</button>
            </div>
    )}
}
export default Button;