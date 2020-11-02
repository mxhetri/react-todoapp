import React, {Component} from 'react';

export class TodoCreator extends Component{

    constructor(props) {
        super(props);
        this.state = {
            newTodoItem: ''
        }
    }

    updateNewTextValue = (event) => {
        this.setState({newTodoItem: event.target.value})
    }

    createNewTodo = () => {
        this.props.callback(this.state.newTodoItem);
        this.setState({
            newTodoItem: ''
        })
    }


    render() {
        return(
            <div className='my-1'>
                <input className='form-control'
                       value={this.state.newTodoItem}
                       onChange={this.updateNewTextValue}
                />
                <button className='btn btn-primary mt-1'
                        onClick={this.createNewTodo}>
                    Add
                </button>
            </div>
        )
    }
}