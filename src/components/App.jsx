import React, {Component} from 'react';
import Counter from './Counter/Counter';
import Dropdown from './Dropdown/Dropdown';
import ColorPicker from './ColorPicker/ColorPicker';
import Todo from './TodoList/Todo';
import Form from './Form/Form';
import Clock from './Clock/Clock';
import Tabs from './Tabs/Tabs';
import css from './App.module.css';


const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2496F3' },

  { label: 'grey', color: '#607D88' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },

  { label: 'violet', color: '#ee82ee' },
  { label: 'lightgreen', color: '#82eeba' },
  { label: 'orange', color: '#d6670d' },
];

const tabs =[
  {
      "label": "Tab 1",
      "content": "She sells seashells by the seashore"
  },

  {
      "label": "Tab 2",
      "content": "Susie works in a shoeshine shop. Where she shines she sits, and where she sits she shines"
  },

  {
      "label": "Tab 3",
      "content": "I have got a date at a quarter to eight; I’ll see you at the gate, so don’t be late"
  }
]

class App extends Component {

  formSubmitHandler = data => {
    console.log(data);
    
  }

  render() {
    

    return (
      <div className={css.App}>
        <h1>Funny workshop app</h1>

      <div className={css.App__box}>        

      <Counter initialValue={0} />

      <Dropdown />

      <ColorPicker options={colorPickerOptions} />
          
      <Todo/>      
                
      <Form onSubmit={this.formSubmitHandler} />
      
      <Clock />
      
          <Tabs tabs={tabs} className={css.Tabs__box} />
      </div>
      

    </div>
    )
  }
}

export default App;