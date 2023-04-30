import React, { Component } from "react";
import TodoList from "./TodoList";
import css from './Todo.module.css';

class Todo extends Component {
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
            <div className={css.Todo}>
            <h2>To do list</h2>
            <span>Total quantity: {this.state.todos.length}</span>
            <span>Quantity of done: {completedTodos.length }</span>
            <TodoList todos={this.state.todos} onDeleteTodo={this.deleteTodo} /> 
          </div>
        );
    }
}


export default Todo;