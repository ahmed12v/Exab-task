import { Component } from '@angular/core';
import { Liberery } from '../../../shared/components/liberery/liberery';
import { NewAddtions } from '../../../shared/components/new-addtions/new-addtions';

@Component({
  selector: 'app-home',
  imports: [Liberery, NewAddtions],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
