import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { SpellFilter } from "../model/spell-filter";
import { MatCheckboxChange } from "@angular/material/checkbox";

@Component({
  selector: "app-spell-filter",
  templateUrl: "./spell-filter.component.html",
  styleUrls: ["./spell-filter.component.css"]
})
export class SpellFilterComponent implements OnInit {
  @Output() filterChange: EventEmitter<string> = new EventEmitter<string>();
  dataFilter: SpellFilter;
  levels: number[] = [0, 1, 2, 3, 4, 5];
  types: string[] = ["Attack", "Utility"];
  traditions: string[] = [
    "Air",
    "Alteration",
    "Arcana",
    "Battle",
    "Celestial",
    "Chaos",
    "Conjuration",
    "Curse *",
    "Destruction",
    "Divination",
    "Earth",
    "Enchantment",
    "Fire",
    "Forbidden *",
    "Illusion",
    "Life",
    "Nature",
    "Necromancy *",
    "Primal",
    "Protection",
    "Rune",
    "Shadow",
    "Song",
    "Storm",
    "Technomancy",
    "Teleportation",
    "Theurgy",
    "Time",
    "Transformation",
    "Water"
  ];
  sources: string[] = ["SotDL", "DLC"];
  constructor() {}

  ngOnInit() {
    this.dataFilter = new SpellFilter();
    this.dataFilter.levels = [];
    this.dataFilter.types = [];
    this.dataFilter.traditions = [];
    this.dataFilter.sources = [];
  }

  checkboxChanged(data: any, value: MatCheckboxChange, prop: string) {
    if (value.checked) {
      this.dataFilter[prop].push(data);
    } else {
      const index = this.dataFilter[prop].indexOf(data);
      if (index > -1) {
        this.dataFilter[prop].splice(index, 1);
      }
    }
    this.emitChange();
  }

  emitChange() {
    this.filterChange.emit(JSON.stringify(this.dataFilter));
  }
}
