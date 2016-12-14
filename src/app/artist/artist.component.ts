import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ArtistsService} from '../artists.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artist: Array<Object>;

  constructor(
    private _artistsServices: ArtistsService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {

  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['mbid'];
      this._artistsServices.getArtist(id).subscribe(artist => {
        this.artist = artist;
      });
    })


  }

}
