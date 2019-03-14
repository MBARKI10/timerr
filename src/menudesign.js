import React, {Component} from 'react';
import fleshe from './retour-fleche.jpg'
import './menudesign.css';
class Design extends Component {
    render() {
        return (
            <div className="design">
               <div className="carre"> </div>
               
               <div className="round"></div>
               <img src={fleshe} alt='/'/>

            </div>
    )}
}
export default Design;