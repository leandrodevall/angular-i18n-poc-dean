import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  lang = "";
  constructor() {}

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
  }

  changeLang(lang: string): void {
    localStorage.setItem('lang', lang);
    window.location.reload();
  }
}
