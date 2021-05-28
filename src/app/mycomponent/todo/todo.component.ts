import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  todos:Todo[];
  localitems:string;

  constructor() { 
    this.localitems = localStorage.getItem('todos')
    if(this.localitems === null){
      this.todos = []
    }else{
      this.todos = JSON.parse(localStorage.getItem('todos'))
    }
  }

  ngOnInit(): void {}

  deletetodo(todo:Todo){
    const index = this.todos.indexOf(todo); 
    this.todos.splice(index,1);
    localStorage.setItem('todos',JSON.stringify(this.todos))
  }

  addtodo(todo:Todo){
    this.todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(this.todos))
  }

  toggletodo(todo:Todo){
    const index = this.todos.indexOf(todo); 
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos',JSON.stringify(this.todos))
  }

}
