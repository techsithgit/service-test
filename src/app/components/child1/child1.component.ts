import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Input() passToChildern: string;
  public passToParent:string = "insideChild1";
  @Output() fromchild = new EventEmitter<string>();

  sendToParent() {
  this.passToParent = "passedToParent";
  this.fromchild.emit("passedToParent");
 }
 ngOnInit() {
 }
}
