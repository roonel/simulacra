import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ContentService} from '../../content.service';
import {TooltipDialogComponent} from '../tooltip-dialog/tooltip-dialog.component';
import {MatDialog, MatDialogConfig, MatDialogRef, MatDialogState} from '@angular/material/dialog';
import {BehaviorSubject, Subject} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-content-tooltip',
  templateUrl: './content-tooltip.component.html',
  styleUrls: ['./content-tooltip.component.scss']
})
export class ContentTooltipComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  type: string;
  id: string;
  entry: any;
  dialogRef: MatDialogRef<TooltipDialogComponent>;
  textHover: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  dialogConfig: MatDialogConfig;
  @ViewChild('linkElement', {static: true}) linkElement: ElementRef;

  @Input() text: string;

  get link(): string {
    return this.type + '/' + this.id;
  }

  @Input('link') set link(value: string) {
    if (value) {
      const linkParts = value.split('/');
      this.type = linkParts[0];
      this.id = linkParts[1];

      this.loadEntry();
    }
  }

  constructor(private contentService: ContentService, private dialog: MatDialog, private router: Router) {
  }


  ngOnInit(): void {
    this.dialogConfig = new MatDialogConfig();
    this.dialogConfig.width = '325px';
    this.dialogConfig.hasBackdrop = false;
    this.dialogConfig.data = {type: this.type, entry: this.entry, hover: this.textHover};
    this.dialogConfig.panelClass = 'content-modal-box';
    this.dialogConfig.closeOnNavigation = false;
  }

  private loadEntry() {
    switch (this.type) {
      case 'spell':
        this.entry = this.contentService.getSpellList().find(value => value.id === this.id);
        break;
      case 'creature':
        this.entry = this.contentService.getCreatureList().find(value => value.id === this.id);
        break;
      case 'item':
        this.entry = this.contentService.getItemList().find(value => value.id === this.id);
        break;
      case 'relic':
        this.entry = this.contentService.getRelicList().find(value => value.id === this.id);
        break;
      case 'ancestry':
        this.entry = this.contentService.getAncestryList().find(value => value.id === this.id);
        break;
    }
  }

  navigate() {
    this.router.navigate([this.type + '-list', this.id]);
  }

  showTooltip() {
    const bounding = this.linkElement.nativeElement.getBoundingClientRect();
    this.dialogConfig.position = {left: `${bounding.left - 325}px`, top: `${bounding.bottom - 20}px`};
    if (!this.dialogRef || this.dialogRef.getState() !== MatDialogState.OPEN) {
      this.dialogRef = this.dialog.open(TooltipDialogComponent, this.dialogConfig);
    }
  }

  hovering() {
    this.textHover.next(true);
    this.showTooltip();
  }

  leftHover() {
    this.textHover.next(false);
  }
}
