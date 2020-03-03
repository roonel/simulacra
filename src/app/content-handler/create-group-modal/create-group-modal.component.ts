import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-group-modal',
  templateUrl: './create-group-modal.component.html',
  styleUrls: ['./create-group-modal.component.scss']
})
export class CreateGroupModalComponent implements OnInit {
  groupName: string;
  constructor() { }

  ngOnInit(): void {
  }

}
