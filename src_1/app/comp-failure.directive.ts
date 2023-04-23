import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(public fobj : ElementRef) 
  { }
  @HostListener('mouseenter')onmouseenter()
  {
    this.fobj.nativeElement.style.color = 'red';
  }
  @HostListener('mouseleave')onmouseleave()
  {
    this.fobj.nativeElement.style.color = 'black';
  }

}
