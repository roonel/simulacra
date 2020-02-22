import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-processed-text',
  templateUrl: './processed-text.component.html',
  styleUrls: ['./processed-text.component.css']
})
export class ProcessedTextComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  private _text: string;
  get text(): string {
    return this._text;
  }

  @Input('text') set text(value: string) {
    if (value) {
      this._text = value;
      this.processText();
    }
  }

  dataList = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  processText() {
    let isActionBlock = false;
    let openings = 0;
    let currentText = '';
    const list = [];
    for (let i = 0; i < this._text.length; i++) {
      const element = this._text[i];
      if (!isActionBlock) {
        if (element === '<' && this._text[i + 1] === '<') {
          isActionBlock = true;
          i++;
          list.push({type: 'text', value: currentText});
          currentText = '';
        } else {
          currentText += element;
        }
      } else {
        if (element === '<' && this._text[i + 1] === '<') {
          openings++;
          currentText += element;
          currentText += element;
          i++;
        } else if (element === '>' && this._text[i + 1] === '>') {
          if (openings > 0) {
            openings--;
            currentText += element;
            currentText += element;
            i++;
          } else {
            isActionBlock = false;
            i++;
            list.push(this.determineAction(currentText));
            currentText = '';
          }
        } else {
          currentText += element;
        }
      }
    }
    if (currentText.length > 0) {
      list.push({type: 'text', value: currentText});
    }
    this.dataList = list;
  }

  determineAction(actionText: string) {
    if (actionText === 'br') {
      return {type: 'break'};
    }
    const actionType = actionText.substring(0, actionText.indexOf(':'));
    const actionData = actionText.substring(actionText.indexOf(':') + 1);
    if (actionType === 'table' || actionType === 'list') {
      const validJson = actionData.replace(/\'/g, '"');
      return {type: actionType, value: JSON.parse(validJson)};
    } else {
      return {type: actionType, value: actionData};
    }
  }
}
