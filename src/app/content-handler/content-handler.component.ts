import {Component, OnInit, ViewChild} from '@angular/core';
import {ContentService} from '../content.service';

@Component({
  selector: 'app-content-handler',
  templateUrl: './content-handler.component.html',
  styleUrls: ['./content-handler.component.css']
})
export class ContentHandlerComponent implements OnInit {

  addedContent: string[];
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.addedContent = this.contentService.getContentList();
  }

  onFilesAdded($event: any) {
    const files = $event.target.files;
    const reader = new FileReader();
    reader.readAsText(files[0]);
    reader.onload = (data) => {
      const finalJson = reader.result;
      this.contentService.uploadJson(finalJson.toString(), files[0].name);
      this.addedContent = this.contentService.getContentList();
    };
  }

  removeContent(c: string) {
    this.contentService.removeContent(c);
    this.addedContent = this.contentService.getContentList();
  }
}
