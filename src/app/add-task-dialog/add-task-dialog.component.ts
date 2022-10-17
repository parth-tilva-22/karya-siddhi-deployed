import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../models/task';
import { RemoteTaskService } from '../remote-task.service';
@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss']
})
export class AddTaskDialogComponent implements OnInit {

  @Input() isOpen: boolean = true;
  @Input() task: Task = {
    title: " ",
    description: "",
    dueDate: "",
    isComplete: true,
    priority: 0,
  } 
  @Output() addTaskEvent = new EventEmitter<string>();
  @Output() taskPostedEvent = new EventEmitter<string>();

  priority: number=2;
  temp = "high"
  dueDate :Date | undefined;


  constructor(private remoteTaskService: RemoteTaskService) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.addTaskEvent.emit("close");
  }

  setTask() {
    let priorityNum = 0;
    if(this.priority.toString()== "high"){
      this.task.priority = 1;
    }else if(this.priority.toString()== "medium"){
      this.priority =2;

    }else if(this.priority.toString()== "low"){
      this.priority = 3;
    }
    this.task = {
      id:"3fa85f64-5717-4562-b3fc-2c963f66afa6",
      title: this.task.title,
      description: this.task.description,
      dueDate: (this.dueDate?.toString()==null)? "": this.dueDate?.toString(),
      isComplete: true,
      priority: priorityNum,
    }
    this.remoteTaskService.setTask(this.task).subscribe({
      next: (task) => {
        console.log(task);
        this.taskPostedEvent.emit("posted successfully");
      }
    });
    this.closeDialog();
  }


}
