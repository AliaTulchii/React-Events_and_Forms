import React, { Component } from "react";
import shortid from "shortid";
import css from './Form.module.css'


class Form extends Component {
    state = {
    name: '',
    tag: '',
    experience: 'junior',
    licence: false
  }
  

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

    handleChange = e => {
        // console.log(e.currentTarget);
        // console.log(e.currentTarget.name);
        // console.log(e.currentTarget.value);
    
    
          this.setState({
          [e.currentTarget.name]: e.currentTarget.value,
        })
    }
    

  handleSubmit = e => {
    e.preventDefault();
    
    this.props.onSubmit(this.state);

    this.reset();
  };

  handleLicenceChange = e => {
    console.log(e.currentTarget.checked);

    this.setState({licence: e.currentTarget.checked})
  }
    
    reset = () => {this.setState({name: ' ',
      tag: ' ',
    })
  };
  

    

    render() {
      return (
            
            <form onSubmit={this.handleSubmit} className={css.Form}>
              <h2>Form</h2>  
              <div className={css.Form__input}>
            <label htmlFor={this.nameInputId} className={css.Form__inputLabel}>
                <p>Name</p>
                <input
                type='text'
                name='name'
                value={this.state.name}
                onChange={this.handleChange}
                id={this.nameInputId}
                className={css.Form__inputBox}
              />
                
            </label>
            <label htmlFor={this.tagInputId} className={css.Form__inputLabel}>
                <p>Lastname</p>
                <input
                type='text'
                name='tag'
                value={this.state.tag}
                onChange={this.handleChange}
                id={this.tagInputId}
                className={css.Form__inputBox}
              />
            </label>
            </div>
            
            

            <p>Your level:</p>
            <label>
              <input 
              type="radio" 
              name="experience" 
              value="junior"
              onChange={this.handleChange}
              checked={this.state.experience === "junior"}
              />
              Junior
            </label>
            <label>
              <input 
              type="radio" 
              name="experience" 
              value="middle"
              onChange={this.handleChange}
              checked={this.state.experience === "middle"}
              />
              Middle
            </label>
            <label>
              <input 
              type="radio" 
              name="experience" 
              value="senior"
              onChange={this.handleChange}
              checked={this.state.experience === "senior"}
              />
              Senior
            </label>
            
          <label>
            <input
              type="checkbox"
              name="licence"
              checked={this.state.licence}
              onChange={this.handleLicenceChange}
            />
            Agree with the terms
            </label>
            
            <button type='submit' className={css.Form__button} disabled={!this.state.licence}>Send</button>
          </form>
        );
    }
}


export default Form;