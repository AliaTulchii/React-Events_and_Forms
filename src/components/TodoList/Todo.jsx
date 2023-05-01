import React, { Component } from "react";
import TodoList from "./TodoList";
import css from './Todo.module.css';
import TodoEditor from "components/TodoEditor/TodoEditor";
// import Filter from './Filter'
import shortid from 'shortid';



class Todo extends Component {
    state = {
        todos: [
          { id: 'id-1', text: 'Learn the basics of React', completed: true },
          { id: 'id-2', text: 'Understand how React Router works', completed: false },
          { id: 'id-3', text: 'Survive Redux', completed: false },
          { id: 'id-4', text: 'Start to learn Node.js', completed: false },
          
        ],
      activeOptionInd: 0,
      filter: '',

  };
  
  addTodo = text => {
    console.log(text);

    const todo = {
      id: shortid.generate,
      text,
      completed: false,

    };

    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }))
  }
    
      deleteTodo = (todoId) => {
        this.setState(prevState => ({
          todos: prevState.todos.filter(todo => todo.id !== todoId),
        }))
  }

  setActiveInd = index => {
        this.setState({ activeOptionInd: index });
    };
  
  toggleCompleted = todoId => {
    console.log(todoId);

    this.setState(prevState => ({
      todos: prevState.todos.map(todo => { 
        if (todo.id === todoId) {
          console.log('Found that todo, what we need!');
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
        
      }),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  }

  getVisibleTodos = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
     return  this.state.todos.filter(todo => todo.text.toLowerCase().includes(normalizedFilter));
  }

  

    render() {
        const completedTodos = this.state.todos.filter(todo => todo.completed);
      
      const visibleTodos = this.getVisibleTodos();
      return (
            <div className={css.Todo}>
            <h2>To do list</h2>
            <span>Total quantity: {this.state.todos.length}</span>
            <span>Quantity of done: {completedTodos.length }</span>
            <TodoEditor onSubmit={this.addTodo} />
            <TodoList
              todos={visibleTodos}
              onDeleteTodo={this.deleteTodo}
              onToggleCompleted={this.toggleCompleted}
            /> 
            <label>
              Filter:
              <input
                type='text'
                value={this.state.filter}
                onChange={this.changeFilter}
              />
        </label>

            {/* <Filter
              value={this.state.filter}
              onChange={this.changeFilter} /> */}
          </div >
        
        );
    }
}


export default Todo;