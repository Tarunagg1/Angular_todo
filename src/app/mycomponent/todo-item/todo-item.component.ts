import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Input() i: Number;
  @Output() tododelete:EventEmitter<Todo> = new EventEmitter();
  @Output() todocheckbox:EventEmitter<Todo> = new EventEmitter();

  constructor() {
    
   }

  ngOnInit(): void {
  }

  deletetodo(todo:Todo){
    this.tododelete.emit(todo)
  }

  onCheckboxclick(todo:Todo){
    this.todocheckbox.emit(todo);
  }

}
