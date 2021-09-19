import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo'
import { AddTodoComponent } from '../add-todo/add-todo.component';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  demo: [];
  localitem: string;
  e:any[]=[1,2,3];
  
  
  constructor() {
//console.log( localStorage.getItem("todos"));
console.log(this.e);
  this.localitem=localStorage.getItem('todos')!;

    if (this.localitem == null) {
      this.todos = [  


                    ]

    }
    else
    {
      this.todos=JSON.parse(this.localitem);
    }
  }

  ngOnInit(): void {
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    console.log(index);
    console.log(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo: Todo) {
    console.log("addtodo call");
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  checkboxTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active=!    this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
   
  }
}
