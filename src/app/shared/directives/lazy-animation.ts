import { Directive, ElementRef, Renderer2, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollRevealDirective implements AfterViewInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngAfterViewInit(): void {

    
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.renderer.addClass(this.el.nativeElement, 'hidden');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.removeClass(this.el.nativeElement, 'hidden');
          this.renderer.addClass(this.el.nativeElement, 'show');
        } else {
          this.renderer.removeClass(this.el.nativeElement, 'show');
          this.renderer.addClass(this.el.nativeElement, 'hidden');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(this.el.nativeElement);
  }
}