import { Component, OnInit,Input } from '@angular/core';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { TaskService } from '../task.service';
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
  title = "My Priorities";
  description = "(next 3 days - high priority)"
  isDialogOpen: boolean = false;

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



  constructor(private taskServeice: TaskService) { }

  ngOnInit(): void {
    // let xyz = this.taskServeice.getTasks();
    // console.log(xyz);
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
