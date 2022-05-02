import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: ['h2 { color: pink }'],
  styleUrls: ['./child.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChildComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void { }

}
