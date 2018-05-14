import React, {Component} from 'react';
import FormatTime from '../utlis/FormatTime';

export default class DisplayLog extends Component {

    renderEmpty() {
        return <span className="empty-log">空空如也~</span>;
    }

    renderLog() {
        let liArray = this.props.logArray.map((item, index, array) => {
            return (
                <li key = {item}>{FormatTime(item)}</li>
            )
        });
        return liArray;
    }

    componentWillReceiveProps(nextProps) {
        console.log("---nextProps----->"+nextProps.logArray)
    }

    render() {
        //logArray的数组长度等于0，返回空空如也
        //否则，把元素遍历，得到一系列的<li>

        return (
            <ul className="log">
                {this.props.logArray.length === 0 ? this.renderEmpty() : this.renderLog()}
            </ul>
        )
    }
}