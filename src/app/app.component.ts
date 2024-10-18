import { Component } from '@angular/core';
import { myArrayModel } from './array.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  componentsArray: Array<myArrayModel>;

  constructor() {
    this.componentsArray = new Array<myArrayModel>();
  }

  receiveMessage($event: any) {
    if ($event % 2 === 0) {
      this.componentsArray.push({
        type: 'even',
        value: $event,
      });
    } else {
      this.componentsArray.push({
        type: 'odd',
        value: $event,
      });
    }
  }
}
