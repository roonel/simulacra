import {Component, Input, OnInit} from '@angular/core';
import {Spell} from '../../data-model/spell';

@Component({
  selector: 'app-spell-edit',
  templateUrl: './spell-edit.component.html',
  styleUrls: ['./spell-edit.component.css']
})
export class SpellEditComponent implements OnInit {

  @Input() spell: Spell;
  constructor() { }

  ngOnInit(): void {
  }

}
