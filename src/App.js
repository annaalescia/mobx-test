import React, { Component } from "react";
import "./App.scss";
import "./index.scss";

import TaskPage from "./pages/TaskPage";
import ToDoStore from "./ToDoStore";
import { Provider } from "mobx-react";

class App extends Component {
  render() {
    return (
      <Provider toDoStore={ToDoStore}>
        <div className="App">
          <TaskPage />
        </div>
      </Provider>
    );
  }
}

export default App;
