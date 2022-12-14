import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  faCircleCheck = faCirclePlus;
  @Input() title = "";
  @Input() description = "";
  @Input() taskList: Task[] = [];


  @Output() addTaskEvent = new EventEmitter<string>();
  @Output() taskClicked = new EventEmitter<Task>();



  constructor() { }

  ngOnInit(): void {
  }


  onTaskClicked(task: Task){
    this.taskClicked.emit(task)
  }


  addTask(value: string){
    this.addTaskEvent.emit(value);
  }

}
