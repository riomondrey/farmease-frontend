import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[scrollLink]'
})
export class ScrollLinkDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    event.preventDefault();
    const targetId = this.el.nativeElement.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        behavior: 'smooth',
        top: targetElement.offsetTop
      });
    }
  }
}
