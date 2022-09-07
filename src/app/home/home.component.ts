import { Component, OnInit,Input } from '@angular/core';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

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


  constructor() { }

  ngOnInit(): void {
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
