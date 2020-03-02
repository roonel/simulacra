import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-inline-render',
  templateUrl: './inline-render.component.html',
  styleUrls: ['./inline-render.component.css']
})
export class InlineRenderComponent implements OnInit {

  @Input() content: any[];
  @Output() linkClicked = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
