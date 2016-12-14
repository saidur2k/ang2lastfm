import { Component, OnInit } from '@angular/core';

import {ArtistsService} from '../artists.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})

export class ArtistsComponent implements OnInit {
  popularList: Array<Object>;
  searchRes: Array<Object>;
  searchStr: string;
  constructor(private _artistsService: ArtistsService) {
    this._artistsService.getPopular().subscribe(res => {
      this.popularList = res;
    });
  }

  ngOnInit() {
  }

  searchArtists() {
    this._artistsService.searchArtists(this.searchStr).subscribe(res => {
      this.searchRes = res;
    })
  }

}
