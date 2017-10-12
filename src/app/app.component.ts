import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public passToChildern: string = 'from parent';
  public passedToParent: string = 'nothing passed from childen';

  fromchild(passed: string) {
    this.passedToParent = passed;
  }

}
