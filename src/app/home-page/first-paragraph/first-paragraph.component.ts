import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-first-paragraph',
  templateUrl: './first-paragraph.component.html',
  styleUrls: ['./first-paragraph.component.css']
})
export class FirstParagraphComponent implements AfterViewInit {
  @ViewChild("img") img : ElementRef;
  constructor() { }

  ngAfterViewInit (): void {
    this.disableOffset()
  }
  @HostListener('window:resize', ['$event'])
  disableOffset(){
    if(window.innerWidth <= 1200) {
      this.img.nativeElement.classList.remove("offset-2")
    } else{
      this.img.nativeElement.classList.add("offset-2")

    }
  }




}
