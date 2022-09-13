import { Injectable } from '@angular/core';
import { Task } from './models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  setTask(task: Task) {

    let tList = this.getTasks();

    tList.push(task);

  const json = JSON.stringify(tList);
  localStorage.setItem("taskList", json);

  }

  getTasks():Task[] {

    let tList = [];

    if (typeof (Storage) !== "undefined") {
      if (localStorage.getItem("taskList") == null) {
      } else {
        let jsonStr = localStorage.getItem("taskList");  // array of tasks
        tList = JSON.parse(jsonStr!)
      }
    }
    else {
      alert("Sorry, your browser does not support Web Storage")
    }

    // console.log(tList);
      return tList;
  }
}
