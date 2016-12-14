import { Component } from '@angular/core';
import { Http, Headers} from '@angular/http';
import {ArtistsService} from './artists.service';
import {PagerService} from './pager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  ,providers: [ArtistsService, PagerService]
})

export class AppComponent {

  constructor(private _artistsServices: ArtistsService) {

  }
}
