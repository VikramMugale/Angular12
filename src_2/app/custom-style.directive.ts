import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective 
{

  constructor(public cobj : ElementRef) 
  {
    this.cobj.nativeElement.style.background = 'yellow';
    this.cobj.nativeElement.style.text = 'bold';
  }
  
  

}
