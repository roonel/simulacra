import {Component, Input, OnInit} from '@angular/core';
import {Source} from '../../data-model/source';

@Component({
  selector: 'app-source-input',
  templateUrl: './source-input.component.html',
  styleUrls: ['./source-input.component.scss']
})
export class SourceInputComponent implements OnInit {

  @Input() source: Source;
  constructor() { }

  ngOnInit(): void {
  }

}
