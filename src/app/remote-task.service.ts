import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './models/task';

@Injectable({
  providedIn: 'root'
})
export class RemoteTaskService {

  private taskUrl = "https://localhost:7268/task";
  private taskAssignedUrl = "https://localhost:7268/task/completed"; //https://localhost:7268/task/GetTaskInfo/assigned
  private taskCompletedUrl = "https://localhost:7268/task/assigned"; //https://localhost:7268/task/GetTaskInfo/completed

  constructor(
    private http: HttpClient,
  ) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl)
  }

  getTaskAssigned(){
    return this.http.get<number>(this.taskAssignedUrl)
  }

  getTaskCompleted(){
    return this.http.get<number>(this.taskCompletedUrl)
  }
}
