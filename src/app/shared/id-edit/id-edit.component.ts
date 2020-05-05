import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-id-edit',
  templateUrl: './id-edit.component.html',
  styleUrls: ['./id-edit.component.css']
})
export class IdEditComponent implements OnInit {
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();
  idFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\S*$/)
  ]);
  constructor() { }

  ngOnInit(): void {
  }

  change($event: any) {
    this.value = $event;
    this.valueChange.emit(this.value);
  }
}
