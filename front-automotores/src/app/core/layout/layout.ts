import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-layout',
  imports: [
    Header,
    Footer
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
