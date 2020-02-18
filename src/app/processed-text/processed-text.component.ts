import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-processed-text',
  templateUrl: './processed-text.component.html',
  styleUrls: ['./processed-text.component.css']
})
export class ProcessedTextComponent implements OnInit {
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
    var isActionBlock = false;
    var openings = 0;
    var currentText = '';
    var list = [];
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
    let actionType = actionText.substring(0, actionText.indexOf(':'));
    let actionData = actionText.substring(actionText.indexOf(':') + 1);
    if (actionType === 'table' || actionType === 'list') {
      var validJson = actionData.replace(/\'/g, '"');
      console.log(validJson);
      return {type: actionType, value: JSON.parse(validJson)};
    } else {
      return {type: actionType, value: actionData};
    }
  }
}
