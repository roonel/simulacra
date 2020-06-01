import {Component, OnInit} from '@angular/core';
import {ContentService} from '../content.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
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
import {ReferenceEditComponent} from '../reference/reference-edit/reference-edit.component';
import {VehicleEditComponent} from '../vehicle/vehicle-edit/vehicle-edit.component';

@Component({
  selector: 'app-content-handler',
  templateUrl: './content-handler.component.html',
  styleUrls: ['./content-handler.component.scss']
})
export class ContentHandlerComponent implements OnInit {

  addedContent: any[];
  dialogSettings: MatDialogConfig;

  constructor(private contentService: ContentService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.refresh();
    this.dialogSettings = {
      disableClose: false,
      width: '800px'
    };
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

  edit(dataset: string, entryIndex: number, contentIndex: number) {
    const component = this.getComponent(dataset);
    this.dialogSettings.data = this.addedContent[contentIndex].data[dataset][entryIndex];
    const dialogRef = this.dialog.open(component, this.dialogSettings);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addedContent[contentIndex].data[dataset][entryIndex] = result;
        this.contentService.refresh(this.addedContent[contentIndex].fileName, this.addedContent[contentIndex].data);
      }
    });
  }

  addNew(dataset: string, contentIndex: number) {
    const component = this.getComponent(dataset);
    this.dialogSettings.data = this.getDefaultData(dataset);
    const dialogRef = this.dialog.open(component, this.dialogSettings);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (!this.addedContent[contentIndex].data[dataset]) {
          this.addedContent[contentIndex].data[dataset] = [];
        }
        this.addedContent[contentIndex].data[dataset].push(result);
        this.contentService.refresh(this.addedContent[contentIndex].fileName, this.addedContent[contentIndex].data);
      }
    });
  }

  getComponent(type: string): any {
    switch (type) {
      case 'ancestries': return AncestryEditComponent;
      case 'creatures': return CreatureEditComponent;
      case 'items': return ItemEditComponent;
      case 'paths': return PathEditComponent;
      case 'relics': return RelicEditComponent;
      case 'spells': return SpellEditComponent;
      case 'traditions': return TraditionEditComponent;
      case 'references': return ReferenceEditComponent;
      case 'vehicles': return VehicleEditComponent;
    }
  }

  getDefaultData(type: string) {
    switch (type) {
      case 'ancestries': return {source: {}, tables: []};
      case 'creatures': return {source: {}};
      case 'items': return {source: {}};
      case 'paths': return {source: {}, storyDevelopment: {}};
      case 'relics': return {source: {}};
      case 'spells': return {source: {}};
      case 'traditions': return {source: {}};
      case 'references': return {source: {}};
      case 'vehicles': return {source: {}};
    }
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
          traditions: [],
          references: [],
          vehicles: []
        };
        this.contentService.uploadJson(JSON.stringify(content), result);
        this.refresh();
      }
    });
  }

  addExamples() {
    this.contentService.addExample();
    this.refresh();
  }

  combine() {
    const c: Content = {
      ancestries: [],
      creatures: [],
      items: [],
      paths: [],
      relics: [],
      spells: [],
      traditions: [],
      references: [],
      vehicles: []
    };
    this.addedContent.forEach(content => {
      content.data.ancestries?.forEach(a => c.ancestries.push(a));
      content.data.creatures?.forEach(a => c.creatures.push(a));
      content.data.items?.forEach(a => c.items.push(a));
      content.data.paths?.forEach(a => c.paths.push(a));
      content.data.relics?.forEach(a => c.relics.push(a));
      content.data.spells?.forEach(a => c.spells.push(a));
      content.data.traditions?.forEach(a => c.traditions.push(a));
      content.data.references?.forEach(a => c.references.push(a));
      content.data.vehicles?.forEach(a => c.vehicles.push(a));
    });
    c.ancestries = c.ancestries.sort((a, b) => (a.id > b.id) ? 1 : -1);
    c.creatures = c.creatures.sort((a, b) => (a.id > b.id) ? 1 : -1);
    c.items = c.items.sort((a, b) => (a.id > b.id) ? 1 : -1);
    c.paths = c.paths.sort((a, b) => (a.id > b.id) ? 1 : -1);
    c.relics = c.relics.sort((a, b) => (a.id > b.id) ? 1 : -1);
    c.spells = c.spells.sort((a, b) => (a.id > b.id) ? 1 : -1);
    c.traditions = c.traditions.sort((a, b) => (a.id > b.id) ? 1 : -1);
    c.references = c.references.sort((a, b) => (a.id > b.id) ? 1 : -1);
    c.vehicles = c.vehicles.sort((a, b) => (a.id > b.id) ? 1 : -1);

    const sJson = JSON.stringify(c);
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/json;charset=UTF-8,' + encodeURIComponent(sJson));
    element.setAttribute('download', 'combined.json');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
}
