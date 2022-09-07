import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent implements OnInit {

  isDialogOpen: boolean = false;
  taskListsArray = [{
    title:"My Priorities",
    description:"(next 3 days - high priority)"
  },
  {
    title:"Today's tasks",
    description:""
    
  },
  {
    title:"Later tasks",
    description:""
  }];

  constructor() { }

  ngOnInit(): void {
  }

  addTask(value: string){
    this.isDialogOpen = !this.isDialogOpen;
    console.log("addTask called"+this.isDialogOpen+ value);
  }

}
