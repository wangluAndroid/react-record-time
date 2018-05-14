import React, {Component} from 'react';
import '../App.css'

import DisplayLog from './DisplayLog';
import Button from './Button';
import FormatTime from '../utlis/FormatTime';

export default class TimeDisplay extends Component {



    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            on: false,
            logArray:[]
        }
    }
    /**
     * 添加键盘监听事件--在组件装载完成时 注册监听
     */
    componentDidMount() {
        window.addEventListener('keydown', e => e.preventDefault());//将按下的监听默认事件拦截阻止
        window.addEventListener('keyup',e=>{//按键抬起
            e.preventDefault();
            alert(e.keyCode)
        })
    }

    componentWillUnmount() {
        window.removeEventListener('keydown');
        window.removeEventListener('keyup');
    }

    buttonToggle() {
        //已经开始了，取消正在运行的timer
        if (this.state.on) {
            clearInterval(this.timer);
        } else {
            //否则开启定时器
            //计时器
            this.timer = setInterval(() => {
                this.setState({
                    time: this.state.time + 1,
                });
            }, 10);
        }
        //等价上面的写法：下面的bind(this)用来改变函数的上下文环境
        // setInterval(function () {
        //     this.setState({
        //         time:this.state.time+1,
        //     })
        // }.bind(this), 10);
        this.setState({
            on: !this.state.on
        })
    }

    buttonTogggle1 = () => {
        //计时器
        setInterval(() => {
            this.setState({
                time: this.state.time + 1,
            })
        }, 10);
        //等价上面的写法：下面的bind(this)用来改变函数的上下文环境
        // setInterval(function () {
        //     this.setState({
        //         time:this.state.time+1,
        //     })
        // }.bind(this), 10);
    };

    resetTime(){
        console.log("--------resetTime---------")
        if(this.timer) {
            clearInterval(this.timer)
        }
        this.setState({
            time: 0,
            on: false,
            logArray:[]
        })
    }
    //记录时间
    handleLogTime = ()=>{
        //存储在数组中
        //数组的创建两种方式
        // let a = [];
        // let b = new Array();
        //数组的元素赋值
        this.state.logArray.push(this.state.time);//添加到数组中
        console.log(this.state.logArray);
    };

    //清空函数：这种写法，下面可以直接使用onClick={ this.cleanLog}调用，注意不用写括号：onClick={ this.cleanLog()}
    cleanLog = ()=>{
        console.log("--------清空-------");
        this.setState({logArray:[]})
    };

    render() {
        let time = FormatTime(this.state.time);
        return (
            <div className="Container">
                <h1>{time==0?'00:00:00.00':time}</h1>
                <div className="ButtonContainer">
                    {/*这个地方必须要使用bind(this)：因为把buttonToggle函数传到Button组件中，this代表的是Button组件的上下文
                    ，这里使用bind(this),来指定上下文为TimeDisplay的上下文；如果不bind，将报出setState undefine；如果不这样写，
                    写成箭头函数形式的即可;或者下面的调用不变，而是将将buttonTggle改写成箭头函数*/}
                    <Button styles="success" text={this.state.on ? "暂停" : "开始"} onClick={this.buttonToggle.bind(this)}/>
                    {/*这样写，必须写上括号：前后都必须带括号；onClick={()=>this.resetTime()*/}
                    <Button styles="warn" text="重置" onClick={()=>this.resetTime()}/>
                    {/*或者下面的调用不变，而是将buttonTggle改写成箭头函数*/}
                    <Button styles="primary" text="记录" onClick={this.handleLogTime}/>
                    <Button styles="success" text="清空" onClick={ this.cleanLog}/>
                </div>
                <DisplayLog logArray = {this.state.logArray} />
            </div>
        )

    }
}