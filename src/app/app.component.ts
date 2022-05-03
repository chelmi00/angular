import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <tr><td [attr.colspan]="1+1">one-two</td></tr>
  <div [class.sale]="onSale">Div1</div>
  <div [class]="'classOne classTwo'">Div2</div>
  <div [class]="{
    classOne: true,
    classTwo: false
  }">Div3</div>
  <div [class]="['classOne', 'classTwo']">Div4</div>
  <div [style]="'width:200px; height:40px; background:green'"></div> 
  <div [style]="{
    width: '50px',
    height: '50px',
    background: 'blue'
  }"></div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onSale = true;
}
