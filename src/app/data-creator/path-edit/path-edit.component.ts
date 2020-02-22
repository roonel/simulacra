import {Component, Input, OnInit} from '@angular/core';
import {Path} from '../../data-model/path';

@Component({
  selector: 'app-path-edit',
  templateUrl: './path-edit.component.html',
  styleUrls: ['./path-edit.component.css']
})
export class PathEditComponent implements OnInit {

  @Input() path: Path;
  constructor() { }

  ngOnInit(): void {
  }

}
