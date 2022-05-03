import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <button (click)="onSave()">Save</button>
  <app-item-details (deleteRequest)="deleteItem($event)"></app-item-details>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onSave() {
    console.log('click on save');
  }
  deleteItem(item: any) {
    console.log(item);
  }
}
