import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const e = this.elementRef.nativeElement.querySelector('#toArrow');
    const t = this.elementRef.nativeElement.querySelector('footer');

    const o = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        e.classList.add('scrolled');
      } else {
        e.classList.remove('scrolled');
      }
    };

    const n = new IntersectionObserver(o, {
      root: null,
      threshold: 0,
      rootMargin: '220px',
    });

    n.observe(t);
  }

}
