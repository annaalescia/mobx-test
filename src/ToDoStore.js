import { observable, action, computed } from "mobx";

class ToDoStore {
  @observable toDos = [];

  @action addToDo = toDo => {
    this.toDos.push(toDo);
  };

  @action setToDos = toDos => {
    this.toDos = [...toDos.data];
  };

  @action deleteToDo = id => {
    this.toDos = this.toDos.filter(toDo => toDo.id !== id);
  };

  @computed
  get toDoCount() {
    return this.toDos.length;
  }
}

export default new ToDoStore();
