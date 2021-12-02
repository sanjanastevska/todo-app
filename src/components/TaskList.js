import React, { Component } from 'react';
import TaskItem from './TaskItem';

export default class TaskList extends Component {
    render() {
        return (
            <table>
                <thead>
                    <th>Task</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {this.props.tasks.map((task,index) => (
                        <TaskItem
                            key={index} 
                            taskItem = {task} 
                            id={index}
                            deleteTask={this.props.deleteTask}
                            editTask = {this.props.editTask}
                        />
                    ))}
                </tbody>
            </table>
        )
    }
}
