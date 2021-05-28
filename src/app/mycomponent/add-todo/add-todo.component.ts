import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  
  title:string;
  desc:string;

  @Output() todoadd:EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.desc);
    
    let todo = {
      sno:3,
      title:this.title,
      desc:this.desc,
      active:true
    }        
    console.log(todo);
    
    this.todoadd.emit(todo);
  }

}
