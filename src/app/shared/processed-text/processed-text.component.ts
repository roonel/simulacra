import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Remarkable} from 'remarkable';
import {MarkdownService} from '../../markdown.service';

@Component({
  selector: 'app-processed-text',
  templateUrl: './processed-text.component.html',
  styleUrls: ['./processed-text.component.scss']
})
export class ProcessedTextComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  private _text: string;
  private md: Remarkable = new Remarkable();

  get text(): string {
    return this._text;
  }

  @Input('text') set text(value: string) {
    if (value) {
      this._text = value;
      this.processText();
    } else {
      this.dataList = [];
    }
  }

  dataList = [];

  constructor(private mds: MarkdownService) {
  }

  ngOnInit(): void {

  }

  processText() {
    this.dataList = this.mds.toJson(this._text);
  }
}
