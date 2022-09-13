import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  faHome = faHome;
  faListCheck = faListCheck;
  faQuestionCircle = faQuestionCircle;
  activePage = "/";
  

  constructor(private router: Router, private location: Location) {
    window.onpopstate= () => {
      this.onNavClicked();
      // alert("back clicked");
    }
  }

  ngOnInit(): void {
    this.onNavClicked()
  }

  onNavClicked(){
    if(this.location.path()!=""){
      this.activePage = this.location.path();
    }
    console.log(this.location.path());
    // console.log(this.router.url);
  }

  

}
