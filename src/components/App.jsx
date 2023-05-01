import React, {Component} from 'react';
import Counter from './Counter/Counter';
import Dropdown from './Dropdown/Dropdown';
import ColorPicker from './ColorPicker/ColorPicker';
import Todo from './TodoList/Todo';
import Form from './Form/Form'
import css from './App.module.css';


const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2496F3' },
  { label: 'grey', color: '#607D88' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {

  formSubmitHandler = data => {
    console.log(data);
    
  }

  render() {
    

    return (
      <div className={css.App}>
        <h1>Fun activity app</h1>

      <div className={css.App__box}>        

      <Counter initialValue={0} />

      <Dropdown />

      <ColorPicker options={colorPickerOptions} />
          
      <Todo/>      
                
      <Form onSubmit={this.formSubmitHandler} />
      
      </div>
      

    </div>
    )
  }
}

export default App;