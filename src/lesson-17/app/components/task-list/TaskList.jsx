import * as React from 'react';

import { TaskListHeader } from './TaskListHeader.jsx';
import { TaskListContent } from './TaskListContent.jsx';
import { Ajax } from '../../utils/Ajax';

export class TaskList extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    Ajax.get(
      'http://localhost:4001/list',
      (tasks) => {
        this.setState({
          tasks: tasks,
        });
      },
      (e) => {
        throw new Error(e);
      }
    );
  }

  addTask(task) {
    this.setState({
      tasks: this.state.tasks.concat([task])
    })
  }

  updateTask(task) {
    Ajax.put( `http://localhost:4001/list/${task.id}`, task, (updatedTask) => {
      this.setState((oldState) => {
        const newState = Object.assign({}, oldState);
        const updateTaskIndex = newState.tasks.findIndex(task => updatedTask.id == task.id);
        newState.tasks[updateTaskIndex] = updatedTask;
        return newState;
      });
    })
  }

  render() {
    return <div className="task-list">
      <TaskListHeader onSuccessSubmit={this.addTask.bind(this)} />
      <TaskListContent tasks={this.state.tasks} updateTask={this.updateTask.bind(this)}/>
      <div className="task-list__footer">
      </div>
    </div>
  }
}