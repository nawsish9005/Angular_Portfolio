import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  constructor() {}

  ngOnInit() {
    const e = document.querySelector('.burger') as HTMLElement;
    const t = document.querySelector('.nav-links') as HTMLElement;
    const nodeList = document.querySelectorAll('.nav-links li');
    const s: HTMLElement[] = Array.from(nodeList) as HTMLElement[];
    const a = document.querySelector('.overley') as HTMLElement;

    const b = document.querySelectorAll('.removeLinksOnClick') as NodeListOf<Element>;

    e.addEventListener('click', () => {
      t.classList.toggle('nav-active');
      s.forEach((e: HTMLElement, t: number) => {
        if (e.style.animation) {
          e.style.animation = '';
        } else {
          e.style.animation = `navLinksAnimate 0.5s ease forwards ${t / 7 + 0.3}s`;
        }
      });
      e.classList.toggle('toggle');
      a.classList.toggle('overlay');
    });

    a.addEventListener('click', () => {
      a.classList.remove('overlay');
      t.classList.remove('nav-active');
      e.classList.remove('toggle');
      s.forEach((e: HTMLElement, t: number) => {
        e.style.animation = '';
      });
    });


    b.forEach((element: Element) => {
      element.addEventListener('click', () => {
        a.classList.remove('overlay');
        t.classList.remove('nav-active');
        e.classList.remove('toggle');
        s.forEach((e: HTMLElement, t: number) => {
          e.style.animation = '';
        });
      });
    });

  }
}
