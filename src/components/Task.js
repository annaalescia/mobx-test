// src/components/Task.js

import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

class Task extends Component {
  render() {
    const { task } = this.props;

    return (
      <div className={`list-item`}>
        <div className="title">
          <input
            type="text"
            value={task.title}
            readOnly={true}
            placeholder="Input title"
          />
        </div>

        <div className="actions">
          <Button text="Delete" onClick={this.handleDelete} data={task} />
        </div>
      </div>
    );
  }

  handleDelete = params => {
    const { onDelete } = this.props;
    onDelete(params);
  };

  static propTypes = {
    task: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    }),
    onDelete: PropTypes.func
  };
}

export default Task;
