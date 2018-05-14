import React, {Component} from 'react';
import '../App.css';

export default class Button extends Component{

    //里面添加默认属性
    static defaultProps = {

    };
    render(){
        return(
            <button className={`Button ${this.props.styles }`} onClick={this.props.onClick}>{this.props.text}</button>
        )
    }
}