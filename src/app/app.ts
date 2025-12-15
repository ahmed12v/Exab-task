import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';
import { Footer } from './shared/components/footer/footer';
import { DigitalStamp } from './shared/components/digital-stamp/digital-stamp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , Navbar , Footer , DigitalStamp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exabTask');
}
