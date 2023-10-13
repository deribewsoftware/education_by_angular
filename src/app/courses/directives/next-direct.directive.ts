import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appNextDirect]'
})
export class NextDirectDirective {

  constructor(private el:ElementRef) {

  }
index=0
  @HostListener('click')
  onNextDirect() {
    const elements = this.el.nativeElement.parentElement.parentElement.parentElement.children[0];
    var elm=elements.getElementsByClassName('items')
   elements.children[this.index].classList.add('move-item');
   console.log(elements.append(elm[0]));
    this.index+=1;

}}
