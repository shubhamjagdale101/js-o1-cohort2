/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.Todos = [];
  }

  remove(index){
    if(this.Todos.length <= index) return;
    this.Todos = this.Todos.filter((ele,ind) => ind != index);
  }

  update(index, str){
    this.Todos.forEach((val,ind,arr) => {
      if(ind == index) arr[ind] = str;
    });
  }

  add = (str) => this.Todos.push(str);
  getAll = ( )=> this.Todos;
  get = (indexOfTodo)=> indexOfTodo < this.Todos.length? this.Todos[indexOfTodo] : null;
  clear = ()=> this.Todos.splice(0,this.Todos.length);
}

module.exports = Todo;
