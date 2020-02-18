import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-string-list-input",
  templateUrl: "./string-list-input.component.html",
  styleUrls: ["./string-list-input.component.css"]
})
export class StringListInputComponent implements OnInit {
  constructor() {}
  @Input() list: string[];
  @Output() listChange = new EventEmitter<string[]>();
  @Input() title: string;

  ngOnInit(): void {}

  add() {
    if (!this.list) {
      this.list = [];
      this.listChange.emit(this.list);
    }
    this.list.push("");
  }

  remove(i: number) {
    this.list.splice(i, 1);
  }

  trackByFn(index: any, item: any) {
    return index;
  }
}
