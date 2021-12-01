import React, { Component } from 'react';

export default class CreateTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
        }
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    placeholder="Enter text"
                    value={this.state.task}
                    onChange={this.handleChange}
                    autoFocus
                />
                <button type="submit">Add</button>
            </form>
        );
    }
};
