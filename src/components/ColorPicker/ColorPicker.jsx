import React, {Component} from 'react';
import css from './ColorPicker.module.css';


class ColorPicker extends Component {
    state = {
        activeOptionInd: 0,
    };

    setActiveInd = index => {
        this.setState({ activeOptionInd: index });
    };

    makeOptionClassName = (index) => {
        const optionClasses = [`${css.ColorPicker__option}`];

        if (index === this.state.activeOptionInd) {
            optionClasses.push(`${css.ColorPicker__optionActive}`);
        }
        
        return optionClasses.join(' ');
    };

    render() {
        const { label } = this.props.options[this.state.activeOptionInd];
        const {color} = this.props.options[this.state.activeOptionInd];


        return (
            <div className={css.ColorPicker} style={{ backgroundColor: color, }}>
                <h2 className={css.ColorPicker__title}>Color Picker</h2>
                <p>Color chosed: {label}</p>


                <div>
                    {this.props.options.map(({ label, color }, index) => {
                       
                        const optionClassNames = this.makeOptionClassName(index);
                        
                        return (
                            <button
                                key={label}
                                className={` ${optionClassNames}`}
                                style={{ backgroundColor: color, }}
                                onClick={() => this.setActiveInd(index)}
                            ></button>
                            )
                    })}
                </div>
            </div>
        )
    }
}


export default ColorPicker;