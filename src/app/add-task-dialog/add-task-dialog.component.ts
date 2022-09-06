import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss']
})
export class AddTaskDialogComponent implements OnInit {

  @Input() isOpen: boolean = true;
  @Output() addTaskEvent = new EventEmitter<string>();



  constructor() { }

  ngOnInit(): void {
  }



  closeDialog(){
    this.addTaskEvent.emit("close");
  }


}
