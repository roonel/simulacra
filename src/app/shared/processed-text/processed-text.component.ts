import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Remarkable} from 'remarkable';
import {Table} from '../../data-model/table';

@Component({
  selector: 'app-processed-text',
  templateUrl: './processed-text.component.html',
  styleUrls: ['./processed-text.component.css']
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
    }
  }

  dataList = [];

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  processText() {
    let elements = [];
    const blockLevel = [];
    this.md.block.parse(this._text, {}, {}, blockLevel);
    console.log(blockLevel);
    for (let i = 0; i < blockLevel.length; i++) {
      const current = blockLevel[i];
      if (current.type === 'paragraph_open') {
        const paragraph = this.getParagraph(blockLevel, i);
        elements = elements.concat(paragraph);
        i += 2;
      } else if (current.type === 'bullet_list_open') {
        i++;
        let next = blockLevel[i];
        const listItems = [];
        while (next.type !== 'bullet_list_close') {
          if (next.type === 'list_item_open') {
            let currentListItem = [];
            i++;
            next = blockLevel[i];
            while (next.type !== 'list_item_close') {
              const paragraph = this.getParagraph(blockLevel, i);
              currentListItem = currentListItem.concat(paragraph);
              i += 3;
              next = blockLevel[i];
            }
            listItems.push(currentListItem);
          }
          i++;
          next = blockLevel[i];
        }
        elements.push({type: 'list', value: listItems});
      } else if (current.type === 'heading_open') {
        i++;
        const headingInline = [];
        const next = blockLevel[i];
        this.md.inline.parse(next.content, {}, {}, headingInline);
        elements.push({type: 'header', value: headingInline[0].content, level: current.hLevel});
        i++;
      } else if (current.type === 'table_open') {
        const table: Table = {columns: [], rows: []};
        i++;
        let next = blockLevel[i]; // should be thead_open
        i++; // should be tr_open
        i++;
        next = blockLevel[i]; // should be th_open
        while (next.type !== 'tr_close') {
          if (next.type === 'th_open') {
            i++;
            next = blockLevel[i]; // should be inline
            table.columns.push(next.content);
          }
          i++;
          next = blockLevel[i];
        }
        i++; // should be thead_close
        i++; // should be tbody_open
        next = blockLevel[i];
        while (next.type !== 'tbody_close') {
          if (next.type === 'tr_open') {
            const row = [];
            i++;
            next = blockLevel[i]; // should be td_open
            while (next.type !== 'tr_close') {
              if (next.type === 'td_open') {
                i++;
                next = blockLevel[i]; // should be inline
                row.push(next.content);
              }
              i++;
              next = blockLevel[i];
            }
            table.rows.push(row);
          }
          i++;
          next = blockLevel[i];
        }
        elements.push({type: 'table', value: table});
      }
    }
    this.dataList = elements;
  }

  navigate(link: string) {
    const linkParts = link.split('/');
    this.router.navigate([linkParts[0] + '-list', linkParts[1]]);
  }

  private getParagraph(blockLevel: any[], i: number) {
    const current = blockLevel[i];

    const inlineData = [];
    if (current.type === 'paragraph_open') {
      let next = blockLevel[i + 1];
      if (next.type !== 'inline') {
        console.warn('error');
      }
      this.md.inline.parse(next.content, {}, {}, inlineData);
      next = blockLevel[i + 2];

      if (next.type !== 'paragraph_close') {
        console.warn('error');
      }
    }
    return this.processInline(inlineData);
  }

  private processInline(inlineData: any[]) {
    const dataList = [];
    for (let i = 0; i < inlineData.length; i++) {
      const current = inlineData[i];
      if (current.type === 'softbreak') {
        dataList.push({type: 'break'});
      } else if (current.type === 'strong_open') {
        i++;
        const text = inlineData[i];
        dataList.push({type: 'bold', value: text.content});
        i++;
      } else if (current.type === 'em_open') {
        i++;
        const text = inlineData[i];
        dataList.push({type: 'italics', value: text.content});
        i++;
      } else if (current.type === 'link_open') {
        const href = current.href;
        i++;
        const text = inlineData[i];
        dataList.push({type: 'link', value: text.content, link: href});
        i++;
      } else if (current.type === 'text') {
        dataList.push({type: 'text', value: current.content});
      }
    }
    return dataList;
  }
}
