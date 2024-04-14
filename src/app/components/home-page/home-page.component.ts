import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage],
  providers: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
