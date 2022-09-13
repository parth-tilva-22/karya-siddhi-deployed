import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent implements OnInit {

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


  taskListsArray = [{
    title:"My Priorities",
    description:"(next 3 days - high priority)",
    tasks: this.taskList
  },
  {
    title:"Today's tasks",
    description:"",
    tasks: this.taskList
    
  },
  {
    title:"Later tasks",
    description:"",
    tasks: this.taskList
  }];


  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.updateList();
  }

  addTask(value: string){
    this.isDialogOpen = !this.isDialogOpen;
    // console.log("addTask called"+this.isDialogOpen+ value);
    if(value == "close"){
      // console.log("close called so updating the list");
      this.updateList();
    }
  }

  updateList(){
    this.taskListsArray[2].tasks = this.taskService.getTasks().reverse();
  }

}
