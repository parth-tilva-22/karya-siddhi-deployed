import { Component, OnInit,Input } from '@angular/core';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { TaskService } from '../task.service';
import { RemoteTaskService } from '../remote-task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  date =  new Date()
  hours = this.date.getHours();
  faCircleCheck = faCircleCheck;
  taskCompleted = 0;
  taskAssigned = 0;
  title = "My Priorities";
  description = "(next 3 days - high priority)"
  isDialogOpen: boolean = false;

  taskList: Task[] = [];


  constructor(private taskServeice: TaskService,
              private remoteTaskService: RemoteTaskService) { }

  ngOnInit(): void {
      this.updateUI();
  }

  updateUI(){
    this.remoteTaskService.getTaskAssigned().subscribe(number => this.taskAssigned = number)
    this.remoteTaskService.getTaskCompleted().subscribe(number => this.taskCompleted = number)
    this.remoteTaskService.getTasks().subscribe(rt => this.taskList = rt);
  }

  addTask(value: string){
    this.isDialogOpen = !this.isDialogOpen;
    console.log("addTask called"+this.isDialogOpen+ value);
  }


  greetingMsg():string{
    let msg = this.hours < 12 ? 'Good Morning' : this.hours < 18 ? 'Good Afternoon' : 'Good Evening';
    return msg;
  }


}






/*
taskList: Task[] = [{
    title: "Completed budgeting for FY 2023",
    description: "Budgeting for FY 2023 this is required by the finance depeartment. A further longer description is possible.",
    dueDate: "26th aug 2022",
    isComplete: true,
    priority: 1,
  },
  {
    title: "Completed budgeting for FY 2023",
    description: "Budgeting for FY 2023 this is required by the finance depeartment. A further longer description is possible.",
    dueDate: "26th aug 2022",
    isComplete: false,
    priority: 2,
  },
  {
    title: "Completed budgeting for FY 2023",
    description: "Budgeting for FY 2023 this is required by the finance depeartment. A further longer description is possible.",
    dueDate: "26th aug 2022",
    isComplete: true,
    priority: 3,
  },
  {
    title: "Completed budgeting for FY 2023",
    description: "Budgeting for FY 2023 this is required by the finance depeartment. A further longer description is possible.",
    dueDate: "26th aug 2022",
    isComplete: true,
    priority: 2,
  },
  {
    title: "Completed budgeting for FY 2023",
    description: "Budgeting for FY 2023 this is required by the finance depeartment. A further longer description is possible.",
    dueDate: "26th aug 2022",
    isComplete: false,
    priority: 1,
  },
  {
    title: "Completed budgeting for FY 2023",
    description: "Budgeting for FY 2023 this is required by the finance depeartment. A further longer description is possible.",
    dueDate: "26th aug 2022",
    isComplete: false,
    priority: 3,
  }  ]

  */