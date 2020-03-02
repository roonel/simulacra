import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-content-category-display',
  templateUrl: './content-category-display.component.html',
  styleUrls: ['./content-category-display.component.css']
})
export class ContentCategoryDisplayComponent implements OnInit {
  @Input() title: string;
  @Input() data: any[];
  @Output() editEntry = new EventEmitter<number>();
  @Output() deleteEntry = new EventEmitter<number>();
  @Output() addEntry = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }
}
