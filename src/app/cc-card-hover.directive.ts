import { Directive, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appCcCardHover]'
})
export class CcCardHoverDirective {

  constructor(private ele:ElementRef,private render:Renderer) { }
@HostBinding('style.background') bgcolor="green"
@HostBinding('style.color') color="green"
@HostBinding('style.font-size') font='10px';


  @HostListener('mouseover') myMouseOver(){
    this.bgcolor='blue'
    this.color ='yellow'
    this.font='20px'
  }
  @HostListener('mouseout') myMouseOut(){
    this.bgcolor='red'
    this.color ='black'
    this.font='40px'
  }

}
