import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { TodosComponent } from '../todos/todos.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  @Input() demo:string;
  @Input() i:number;
  @Output() todoDelete: EventEmitter<Todo>=new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo>=new EventEmitter();

  exampleCheck1:boolean;

  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo:Todo)
  { 
    this.todoDelete.emit(todo); 
    console.log("onclick triggered")
  }
  onCheckboxClick(todo:Todo)
  {
    this.todoCheckbox.emit(todo); 
  
   
  }

}
