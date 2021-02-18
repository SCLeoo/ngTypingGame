import { Component } from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sentence = lorem.sentence();
  input = '';
  title = 'ngTypingGame';

  onInput(value: string){
    this.input = value;
  }
  compare(orig:string, inputted:string){
    if(!inputted){
      return 'pending';
    }
    return orig===inputted ? 'correct' : 'incorrect';
  }
}
