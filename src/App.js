import React, {Component} from 'react';
import './App.css';
import {TodoBanner} from "./components/TodoBanner";
import {TodoRow} from "./components/TodoRow";
import {TodoCreator} from "./components/TodoCreator";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: 'kamal',
            todoItems: [{action: 'buy salad', done: false},
                        {action: 'buy apple', done: false},
                        {action: 'buy milk', done: true},]
        }
    }


    changeStateData = () => {
        this.setState({
            userName: this.state.userName === 'kamal'? 'xhetri': 'kamal'
        })
    }

    createNewTodo = (task) => {
        if (!this.state.todoItems.find(item =>
            item.action === task.action)){
            this.setState({
                todoItems: [...this.state.todoItems,
                    {action: task, done: false}]
            })
        }
    }

    toggleTodo = (todo) => this.setState({
        todoItems: this.state.todoItems.map(item =>
            item.action === todo.action
                ?{...item, done: !item.done}: item
        )
    })

    todoTableRows = () => {
        return(
            this.state.todoItems.map(item =>
                <TodoRow key={item.action} item={item} callback={this.toggleTodo}/>
            )
        )
    }


    render() {
        return(
            <div>
                <TodoBanner name={this.state.userName} task={this.state.todoItems}/>
                <div className='container-fluid'>
                    <TodoCreator callback={this.createNewTodo}/>
                    <table className='table table-bordered table-striped'>
                        <thead>
                            <tr><th>Description</th><th>Status</th></tr>
                        </thead>
                        <tbody>
                             {this.todoTableRows()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default App;
