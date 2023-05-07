import { Component } from "react";
import css from './Clock.module.css'

export default class Clock extends Component {
    state = {
        time: new Date().toLocaleTimeString(),
    };

    intervalId = null;

    componentDidMount() {
        console.log('setInterval');

        this.intervalId = setInterval(() => this.setState({ time: new Date().toLocaleTimeString() }),
            1000,
        );
    }

    render() {
        return ( 
        <div className={css.Clock__box}>
            <h2>Clock</h2>
            <div className={css.Clock__face}>{this.state.time}</div>  
        </div>
        
    )
}
}