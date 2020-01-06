import React, { Component, Fragment } from "react";
import { inject, observer } from "mobx-react";
import TaskList from "../components/TaskList";
import { getToDos } from "../services/TasksService";

@inject("toDoStore")
@observer

class TaskPage extends Component {
  constructor(props) {
    super(props);
    this.toDoInput = React.createRef();
  }

  state = {
    isLoadingTasks: false
  };

  componentDidMount() {
    this.setState({ isLoadingTasks: true });
    this.loadToDos();
  }

  loadToDos = async() => {
    const { setToDos } = this.props.toDoStore;
    const toDos = await getToDos();
    setToDos(toDos);
    this.setState({ isLoadingTasks: false });
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

  onDelete = params => {
    const { deleteToDo } = this.props.toDoStore;
    deleteToDo(params.data.id);
  };

  render() {
    const { isLoadingTasks } = this.state;
    const { toDos } = this.props.toDoStore;
    return (
      <Fragment>
        <h2 className="page-header">
          You have {this.props.toDoStore.toDoCount} ToDo items
        </h2>
        <TaskList
          loading={isLoadingTasks}
          tasks={toDos}
          onDelete={this.onDelete}
        ></TaskList>
        <form onSubmit={this.handleSubmit} className="page-form">
          <input type="text" placeholder="Add a ToDo" ref={this.toDoInput} />
        </form>
      </Fragment>
    );
  }
}
export default TaskPage;