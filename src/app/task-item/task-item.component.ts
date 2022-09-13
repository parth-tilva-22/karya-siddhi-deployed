import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/task';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faLongArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faLongArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  faCircleCheck = faCircleCheck;
  faLongArrowUp = faLongArrowUp;
  faLongArrowDown = faLongArrowDown;
  faLongArrowRIght = faLongArrowRight;


   @Input() tempTask:Task = {
    title: " ",
    description: "",
    dueDate: "",
    isComplete: true,
    priority: 0,
  } 
  constructor() { }

  ngOnInit(): void {
  }

}
