import { Component, OnInit, HostListener, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-hostlistner',
  templateUrl: './hostlistner.component.html',
  styleUrls: ['./hostlistner.component.css']
})
export class HostlistnerComponent implements OnInit {
  render: any;

  constructor(private ele:ElementRef,render:Renderer) { }

  ngOnInit() {
  }
@HostListener('mouseover') onMouseHover(){
let part = this.ele.nativeElement.querySelector('.card');
this.render.setElementStyle(part,'display','none')
}
@HostListener('mouseout') onMouseOut() {
  let part = this.ele.nativeElement.querySelector('.card-text');
  this.render.setElementStyle(part, 'display', 'none');
}

}
