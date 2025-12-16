import { Component } from '@angular/core';
import { Liberery } from '../../../shared/components/liberery/liberery';
import { NewAddtions } from '../../../shared/components/new-addtions/new-addtions';
import { ScrollRevealDirective } from '../../../shared/directives/lazy-animation';

@Component({
  selector: 'app-home',
  imports: [Liberery, NewAddtions , ScrollRevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
