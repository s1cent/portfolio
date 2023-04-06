import {Component, ElementRef, OnInit, ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('menu') menu: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  useMenu() {
    if(this.menu.nativeElement.classList.contains("showMenu")) {
      this.menu.nativeElement.classList.remove("showMenu")
      this.menu.nativeElement.classList.add("hiddenMenu")
    } else {
      this.menu.nativeElement.classList.add("showMenu")
      this.menu.nativeElement.classList.remove("hiddenMenu")
    }

  }
}
