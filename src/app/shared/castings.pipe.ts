import { Pipe, PipeTransform } from '@angular/core';
import {ContentService} from '../content.service';

@Pipe({
  name: 'castings'
})
export class CastingsPipe implements PipeTransform {
  constructor(private contentService: ContentService) {
  }

  transform(spellId: string, power: number): string {
    const spell = this.contentService.getSpellList().find(s => s.name === spellId);
    if (spell) {
      return '<<spell:' + spellId + '>> (' + (power + 1 - spell.level) + ')' ;
    } else {
      return '<<spell:' + spellId + '>> (?)' ;
    }
  }

}
