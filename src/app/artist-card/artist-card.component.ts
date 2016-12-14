import { Component, Input } from '@angular/core';

@Component({
  selector: 'artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent {

  @Input()
  artist: Object;

}
