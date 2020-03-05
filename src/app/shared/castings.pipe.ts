import {Pipe, PipeTransform} from '@angular/core';
import {ContentService} from '../content.service';

@Pipe({
  name: 'castings'
})
export class CastingsPipe implements PipeTransform {

  private castingByRank = [
    [1],
    [2, 1],
    [3, 2, 1],
    [4, 2, 1, 1],
    [5, 2, 2, 1, 1],
    [6, 3, 2, 2, 1, 1],
    [7, 3, 2, 2, 2, 1, 1],
    [8, 3, 2, 2, 2, 1, 1, 1],
    [9, 3, 3, 2, 2, 2, 1, 1, 1],
    [10, 3, 3, 3, 2, 2, 1, 1, 1, 1],
    [11, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1]
  ];

  constructor(private contentService: ContentService) {
  }

  transform(spellId: string, power: number): string {
    const spell = this.contentService.getSpellList().find(s => s.id === spellId);
    if (spell) {
      return '[' + spell.id + '](spell/' + spellId.replace(/\s/g, '') + ') (' + this.castingByRank[power][spell.level] + ')';
    } else {
      return '[' + spell.id + '](spell/' + spellId + ') (?)';
    }
  }

}
