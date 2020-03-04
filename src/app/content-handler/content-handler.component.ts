import {Component, OnInit} from '@angular/core';
import {ContentService} from '../content.service';
import {MatDialog} from '@angular/material/dialog';
import {AncestryEditComponent} from '../ancestry/ancestry-edit/ancestry-edit.component';
import {ConfirmationModalComponent} from '../shared/confirmation-modal/confirmation-modal.component';
import {CreatureEditComponent} from '../creature/creature-edit/creature-edit.component';
import {ItemEditComponent} from '../item/item-edit/item-edit.component';
import {PathEditComponent} from '../path/path-edit/path-edit.component';
import {RelicEditComponent} from '../relic/relic-edit/relic-edit.component';
import {SpellEditComponent} from '../spell/spell-edit/spell-edit.component';
import {TraditionEditComponent} from '../tradition/tradition-edit/tradition-edit.component';
import {CreateGroupModalComponent} from './create-group-modal/create-group-modal.component';
import {Content} from '../data-model/content';

@Component({
  selector: 'app-content-handler',
  templateUrl: './content-handler.component.html',
  styleUrls: ['./content-handler.component.scss']
})
export class ContentHandlerComponent implements OnInit {

  addedContent: any[];

  constructor(private contentService: ContentService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.addedContent = [];
    this.contentService.getContentList().forEach(ci => this.addedContent.push({fileName: ci, data: this.contentService.getContentFor(ci)}));

  }

  onFilesAdded($event: any) {
    const files = $event.target.files;
    const reader = new FileReader();
    reader.readAsText(files[0]);
    reader.onload = (data) => {
      const finalJson = reader.result;
      this.contentService.uploadJson(finalJson.toString(), files[0].name);
      this.refresh();
    };
  }

  removeContent(c: string, event) {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      data: {title: 'Are you sure you want to remove ' + c + '?'}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.contentService.removeContent(c);
        this.refresh();
      }
    });
    event.stopPropagation();
  }

  editAncestry(entryIndex: number, contentIndex: number) {
    const dialogRef = this.dialog.open(AncestryEditComponent, {
      data: this.addedContent[contentIndex].data.ancestries[entryIndex]
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addedContent[contentIndex].data.ancestries[entryIndex] = result;
        this.contentService.refresh(this.addedContent[contentIndex].fileName, this.addedContent[contentIndex].data);
      }
    });
  }

  editCreature(entryIndex: number, contentIndex: number) {
    const dialogRef = this.dialog.open(CreatureEditComponent, {
      data: this.addedContent[contentIndex].data.creatures[entryIndex]
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addedContent[contentIndex].data.creatures[entryIndex] = result;
        this.contentService.refresh(this.addedContent[contentIndex].fileName, this.addedContent[contentIndex].data);
      }
    });
  }

  editItem(entryIndex: number, contentIndex: number) {
    const dialogRef = this.dialog.open(ItemEditComponent, {
      data: this.addedContent[contentIndex].data.items[entryIndex]
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addedContent[contentIndex].data.items[entryIndex] = result;
        this.contentService.refresh(this.addedContent[contentIndex].fileName, this.addedContent[contentIndex].data);
      }
    });
  }

  editPath(entryIndex: number, contentIndex: number) {
    const dialogRef = this.dialog.open(PathEditComponent, {
      data: this.addedContent[contentIndex].data.paths[entryIndex]
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addedContent[contentIndex].data.paths[entryIndex] = result;
        this.contentService.refresh(this.addedContent[contentIndex].fileName, this.addedContent[contentIndex].data);
      }
    });
  }

  editRelic(entryIndex: number, contentIndex: number) {
    const dialogRef = this.dialog.open(RelicEditComponent, {
      data: this.addedContent[contentIndex].data.relics[entryIndex]
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addedContent[contentIndex].data.relics[entryIndex] = result;
        this.contentService.refresh(this.addedContent[contentIndex].fileName, this.addedContent[contentIndex].data);
      }
    });
  }

  editSpell(entryIndex: number, contentIndex: number) {
    const dialogRef = this.dialog.open(SpellEditComponent, {
      data: this.addedContent[contentIndex].data.spells[entryIndex]
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addedContent[contentIndex].data.spells[entryIndex] = result;
        this.contentService.refresh(this.addedContent[contentIndex].fileName, this.addedContent[contentIndex].data);
      }
    });
  }

  editTradition(entryIndex: number, contentIndex: number) {
    const dialogRef = this.dialog.open(TraditionEditComponent, {
      data: this.addedContent[contentIndex].data.traditions[entryIndex]
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addedContent[contentIndex].data.traditions[entryIndex] = result;
        this.contentService.refresh(this.addedContent[contentIndex].fileName, this.addedContent[contentIndex].data);
      }
    });
  }

  addNewAncestry(contentIndex: number) {
    const dialogRef = this.dialog.open(AncestryEditComponent, {
      data: {source: {}, powerfulAncestry: {}}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (!this.addedContent[contentIndex].data.ancestries) {
          this.addedContent[contentIndex].data.ancestries = [];
        }
        this.addedContent[contentIndex].data.ancestries.push(result);
        this.contentService.refresh(this.addedContent[contentIndex].fileName, this.addedContent[contentIndex].data);
      }
    });
  }

  addNewCreature(contentIndex: number) {
    const dialogRef = this.dialog.open(CreatureEditComponent, {
      data: {source: {}, magic: {}}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (!this.addedContent[contentIndex].data.creatures) {
          this.addedContent[contentIndex].data.creatures = [];
        }
        this.addedContent[contentIndex].data.creatures.push(result);
        this.contentService.refresh(this.addedContent[contentIndex].fileName, this.addedContent[contentIndex].data);
      }
    });
  }

  addNewItem(contentIndex: number) {
    const dialogRef = this.dialog.open(ItemEditComponent, {
      data: {source: {}}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (!this.addedContent[contentIndex].data.items) {
          this.addedContent[contentIndex].data.items = [];
        }
        this.addedContent[contentIndex].data.items.push(result);
        this.contentService.refresh(this.addedContent[contentIndex].fileName, this.addedContent[contentIndex].data);
      }
    });
  }

  addNewPath(contentIndex: number) {
    const dialogRef = this.dialog.open(PathEditComponent, {
      data: {source: {}}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (!this.addedContent[contentIndex].data.paths) {
          this.addedContent[contentIndex].data.paths = [];
        }
        this.addedContent[contentIndex].data.paths.push(result);
        this.contentService.refresh(this.addedContent[contentIndex].fileName, this.addedContent[contentIndex].data);
      }
    });
  }

  addNewRelic(contentIndex: number) {
    const dialogRef = this.dialog.open(RelicEditComponent, {
      data: {source: {}}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (!this.addedContent[contentIndex].data.relics) {
          this.addedContent[contentIndex].data.relics = [];
        }
        this.addedContent[contentIndex].data.relics.push(result);
        this.contentService.refresh(this.addedContent[contentIndex].fileName, this.addedContent[contentIndex].data);
      }
    });
  }

  addNewSpell(contentIndex: number) {
    const dialogRef = this.dialog.open(SpellEditComponent, {
      data: {source: {}}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (!this.addedContent[contentIndex].data.spells) {
          this.addedContent[contentIndex].data.spells = [];
        }
        this.addedContent[contentIndex].data.spells.push(result);
        this.contentService.refresh(this.addedContent[contentIndex].fileName, this.addedContent[contentIndex].data);
      }
    });
  }

  addNewTradition(contentIndex: number) {
    const dialogRef = this.dialog.open(TraditionEditComponent, {
      data: {source: {}}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (!this.addedContent[contentIndex].data.traditions) {
          this.addedContent[contentIndex].data.traditions = [];
        }
        this.addedContent[contentIndex].data.traditions.push(result);
        this.contentService.refresh(this.addedContent[contentIndex].fileName, this.addedContent[contentIndex].data);
      }
    });
  }

  removeEntry(dataSet: string, entryIndex: number, contentIndex: number) {
    const a = this.addedContent[contentIndex].data[dataSet][entryIndex];
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      data: {title: 'Are you sure you want to delete ' + a.name + '?'}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addedContent[contentIndex].data[dataSet].splice(entryIndex, 1);
        this.contentService.refresh(this.addedContent[contentIndex].fileName, this.addedContent[contentIndex].data);
      }
    });
  }

  downloadContent(contentIndex: number, event) {
    const sJson = JSON.stringify(this.addedContent[contentIndex].data);
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/json;charset=UTF-8,' + encodeURIComponent(sJson));
    element.setAttribute('download', this.addedContent[contentIndex].fileName + '.json');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    event.stopPropagation();
  }

  addContentGroup() {
    const dialogRef = this.dialog.open(CreateGroupModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const content: Content = {
          ancestries: [],
          creatures: [],
          items: [],
          paths: [],
          relics: [],
          spells: [],
          traditions: []
        };
        this.contentService.uploadJson(JSON.stringify(content), result);
        this.refresh();
      }
    });
  }

  generateIds() {
    this.addedContent.forEach(ac => {
      if (ac.data.ancestries) {
      ac.data.ancestries.forEach(e => {
        e.id = e.name.replace(/\s/g, '');
      });
      }
      if (ac.data.creatures) {
        ac.data.creatures.forEach(e => {
          e.id = e.name.replace(/\s/g, '');
        });
      }
      if (ac.data.items) {
      ac.data.items.forEach(e => {
        e.id = e.name.replace(/\s/g, '');
      });
      }
      if (ac.data.paths) {
      ac.data.paths.forEach(e => {
        e.id = e.name.replace(/\s/g, '');
      });
      }
      if (ac.data.relics) {
      ac.data.relics.forEach(e => {
        e.id = e.name.replace(/\s/g, '');
      });
      }
      if (ac.data.spells) {
      ac.data.spells.forEach(e => {
        e.id = e.name.replace(/\s/g, '');
      });
      }
      if (ac.data.traditions) {
      ac.data.traditions.forEach(e => {
        e.id = e.name.replace(/\s/g, '');
      });
      }
    });
  }
}
