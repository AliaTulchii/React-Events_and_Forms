import React, {Component} from 'react';
import Counter from './Counter/Counter';
import Dropdown from './Dropdown/Dropdown';
import ColorPicker from './ColorPicker/ColorPicker';
import TodoList from './TodoList/TodoList';

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
  state = {
    todos: [
      { id: 'id-1', text: 'Learn the basics of React', completed: true },
      { id: 'id-2', text: 'Understand how React Router works', completed: false },
      { id: 'id-3', text: 'Survive Redux', completed: false },
      { id: 'id-4', text: 'Start to learn Node.js', completed: false },
      
    ],
  };

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }))
  }

  render() {
    const completedTodos = this.state.todos.filter(todo => todo.completed);

    return (
      <div className={css.App}>
      <h1>Component state</h1>

      <div className={css.App__box}>
      <Counter initialValue={0} />

      <Dropdown />

      <ColorPicker options={colorPickerOptions} />
          
          
      <div className={css.Todo}>
            <h2>To do list</h2>
            <span>Total quantity: {this.state.todos.length}</span>
            <span>Quantity of done: {completedTodos.length }</span>
            <TodoList todos={this.state.todos} onDeleteTodo={this.deleteTodo} /> 
      </div>

      
      </div>
      

    </div>
    )
  }
}

export default App;