import React, {Component} from 'react';

export class TodoBanner extends Component{

    render() {
        return(
            <h2 className='bg-primary text-center text-white p-2'>
                {this.props.name}'s To do List
                ({( this.props.task.filter(item => !item.done)).length} items to do)
            </h2>
        )
    }

}