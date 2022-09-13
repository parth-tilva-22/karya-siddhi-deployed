import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss']
})
export class AddTaskDialogComponent implements OnInit {

  @Input() isOpen: boolean = true;
  @Output() addTaskEvent = new EventEmitter<string>();


  title: string = "";
  description: string = "";
  priority: number=0;
  dueDate :Date | undefined;


  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }



  closeDialog() {
    this.addTaskEvent.emit("close");
  }

  setTask() {
    let priorityNum = 0;
    if(this.priority.toString()== "high"){
      priorityNum = 1;
    }else if(this.priority.toString()== "medium"){
      priorityNum =2;

    }else if(this.priority.toString()== "low"){
      priorityNum = 3;
    }
    let task:Task = {
      title: this.title,
      description: this.description,
      dueDate: (this.dueDate?.toString()==null)? "": this.dueDate?.toString(),
      isComplete: true,
      priority: priorityNum,
    }
    // console.log(task);
    this.taskService.setTask(task);
    this.closeDialog();
  }


}
