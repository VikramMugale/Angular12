import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective 
{

  constructor(public sobj : ElementRef) 
  { }
  @HostListener('mouseenter')onmouseenter()
  {
    this.sobj.nativeElement.style.color = 'green';
  }
  @HostListener('mouseleave')onmouseleave()
  {
    this.sobj.nativeElement.style.color = 'black'
  }

}
