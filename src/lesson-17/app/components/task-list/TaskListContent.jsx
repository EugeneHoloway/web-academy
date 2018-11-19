import * as React from 'react';
import {TaskListItem} from './TaskListItem.jsx';
export class TaskListContent extends React.Component {
  render() {
    const listItems = [];
    for (const item of this.props.tasks) {
      const li = <TaskListItem task={item} key={item.id} updateTask={this.props.updateTask}/>
      listItems.push(li);
    }

    console.log(listItems);

    return <ul className="task-list__content">
      { listItems }
    </ul>
  }
}