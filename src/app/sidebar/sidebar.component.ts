import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  faHome = faHome;
  faListCheck = faListCheck;
  faQuestionCircle = faQuestionCircle;
  activePage = "";
  


  

  constructor(private router: Router) {
    this.onNavClicked()
  }

  ngOnInit(): void {
  }

  onNavClicked(){
    this.activePage = this.router.url;
    console.log(this.router.url);
  }

}
