import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-season-line',
  templateUrl: './season-line.component.html',
  styleUrls: ['./season-line.component.scss']
})
export class SeasonLineComponent {

  @Input() season: string;
  @Input() champion: string;

}
