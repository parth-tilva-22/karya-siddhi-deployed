import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-list-header',
  templateUrl: './task-list-header.component.html',
  styleUrls: ['./task-list-header.component.scss']
})
export class TaskListHeaderComponent implements OnInit {

  faCirclePlus = faCirclePlus;

  @Output() addTaskEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addTask(value: string="priority"){
    this.addTaskEvent.emit(value);
  }

}
