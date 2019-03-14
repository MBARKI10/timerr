import React, {Component} from   'react';
import './style.css'

const milliseconds = 10000;

const hours = `0${new Date(milliseconds).getHours() - 1}`.slice(-2);
const minutes = `0${new Date(milliseconds).getMinutes()}`.slice(-2);
const seconds = `0${new Date(milliseconds).getSeconds()}`.slice(-2);

const time = `${hours}:${minutes}:${seconds}`
console.log(time);
class Timer extends Component {
       
  render(){
 

    return(
      <div className='time'>
        <h1>{time}</h1>
        <p className='desc'>Hours   Minutes    Seconds</p>
        
      </div>
    )
}}
export default Timer;