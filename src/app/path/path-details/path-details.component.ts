import {Component, Input, OnInit} from '@angular/core';
import {Path} from '../../data-model/path';

@Component({
  selector: 'app-path-details',
  templateUrl: './path-details.component.html',
  styleUrls: ['./path-details.component.css']
})
export class PathDetailsComponent implements OnInit {

  @Input() path: Path;
  constructor() { }

  ngOnInit(): void {
  }

}
