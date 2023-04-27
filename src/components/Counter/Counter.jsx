import React from 'react';
import css from '../Counter/Counter.module.css';
import Controls from '../Counter/Controls';

class Counter extends React.Component {

    static defaultProps = {
        initialValue: 0,
    };

    static propTypes = {

    };
    
    state = {
        value: this.props.initialValue,
    };

    handleIncrement = () => {
        this.setState(prevState => {
            return {
                value: prevState.value + 1,
            };
        });
    };

    handleDecrement = () => {
        this.setState(prevState => {
            return {
                value: prevState.value - 1,
            };
        });
    };

    render() {
        return (
            <div className={css.Counter}>
                <h2>Counter</h2>
                <span className={css.Counter__value}>{this.state.value}</span>
                
                <Controls
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
                

            </div>
        )
    }
}

export default Counter;
