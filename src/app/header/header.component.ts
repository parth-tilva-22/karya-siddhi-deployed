import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOpen: boolean = true;


  constructor() { }


  onToggle():void{
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
  }

}
