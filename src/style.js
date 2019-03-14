import React, {Component} from 'react';

import Design from './menudesign';
import Timer from './timer';
import Button from  './button'
import './style.css'

 
class MyComponent extends Component {
    render() {
        return (
            <div className= 'cadre'>
                <div className='top'></div>
                <div className='timer'>
                    <Timer/>
                    <Button />
                </div>
                <Design/>
            </div>
    )}
}
export default MyComponent;