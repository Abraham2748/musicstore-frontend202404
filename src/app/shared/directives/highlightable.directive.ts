import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightable]',
  standalone: true,
})
export class HighlightableDirective {
  constructor(public el: ElementRef) {}

  @HostListener('mouseenter') onEnter() {
    this.el.nativeElement.style.transform = 'scale(1.05)';
    this.el.nativeElement.style.boxShadow = 'var(--primary-color) 0px 0px 10px';
    this.el.nativeElement.style.transition =
      'transform 300ms, box-shadow 300ms';
  }

  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.style.transform = 'scale(1)';
    this.el.nativeElement.style.boxShadow = 'none';
  }
}
