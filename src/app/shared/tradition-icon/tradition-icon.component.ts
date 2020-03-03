import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-tradition-icon',
  templateUrl: './tradition-icon.component.html',
  styleUrls: ['./tradition-icon.component.scss']
})
export class TraditionIconComponent implements OnInit {

  // TODO enum? dark, psychic
  @Input() type: string;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'dark-tradition',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/daemon-skull.svg'));
    iconRegistry.addSvgIcon(
      'psychic-tradition',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/psychic-waves.svg'));
  }
  ngOnInit(): void {
  }

}
