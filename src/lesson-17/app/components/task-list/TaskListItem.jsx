import * as React from 'react';

export class TaskListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
    this.onKeyPressHandler = this.onKeyPressHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  componentDidMount(newProps) {
    this.setState({
      title: this.props.task.title
    });
  }

  onChangeHandler(e) {
    const title = e.target.value;
    this.setState({
      title
    });
  }
  
  onKeyPressHandler(e) {
    if (e.key === 'Enter') {
     this.props.updateTask(Object.assign({}, this.props.task, {title: this.state.title}));
    }
  }

  render() {
    return <li className="task-list__item item">
      <div className="item__checkbox">
        <input type="checkbox"/>
      </div>
      <div className="item__content">
        <input type="text" 
          className="item__input"
          onChange={this.onChangeHandler}
          onKeyPress={this.onKeyPressHandler}
          value={ this.state.title }/>
        <span className="item__title">{this.props.task.title}</span>
      </div>
    </li>
  }
}
