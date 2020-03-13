import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-inline-render',
  templateUrl: './inline-render.component.html',
  styleUrls: ['./inline-render.component.scss']
})
export class InlineRenderComponent implements OnInit {

  @Input() content: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
