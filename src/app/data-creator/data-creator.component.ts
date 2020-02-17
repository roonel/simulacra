import { Component, OnInit } from "@angular/core";
import { Spell } from "../data-model/spell";
import { Source } from "../data-model/source";

@Component({
  selector: "app-data-creator",
  templateUrl: "./data-creator.component.html",
  styleUrls: ["./data-creator.component.css"]
})
export class DataCreatorComponent implements OnInit {
  spell: Spell;
  savedSpells: Spell[] = [];

  constructor() {}

  ngOnInit(): void {
    this.spell = {};
    this.spell.source = {};
  }

  add(): void {
    var newspell: Spell = {};
    newspell.tradition = this.spell.tradition;
    newspell.source = this.spell.source;
    newspell.level = this.spell.level;

    var newSource: Source = {};
    newSource.page = this.spell.source.page;
    newSource.book = this.spell.source.book;

    this.savedSpells.push(this.spell);
    this.spell = newspell;
    this.spell.source = newSource;
  }

  remove(i): void {
    this.savedSpells.splice(i, 1);
  }

  save(): void {
    console.log(JSON.stringify(this.savedSpells));
  }
}
