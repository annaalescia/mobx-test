import React, { Component, Fragment } from "react";
import { inject, observer } from "mobx-react";

@inject("toDoStore")
@observer
export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.toDoInput = React.createRef();
  }

  componentDidMount() {
    this.props.toDoStore.getToDos();
  }

  handleSubmit = e => {
    e.preventDefault();
    const newTodo = {
      title: this.toDoInput.current.value,
      id: Math.floor(Math.random() * (10000 - 1))
    };
    this.props.toDoStore.addToDo(newTodo);
    e.target.reset();
  };

  render() {
    return (
      <Fragment>
        <p>You have {this.props.toDoStore.toDoCount} ToDo items</p>
        <ul>
          {this.props.toDoStore.toDos.map(toDo => (
            <li key={toDo.id}>
              {toDo.title}
              <button onClick={() => this.props.toDoStore.deleteToDo(toDo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Add a ToDo" ref={this.toDoInput} />
        </form>
      </Fragment>
    );
  }
}
