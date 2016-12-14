import { Component } from '@angular/core';
import { Http, Headers} from '@angular/http';
import {ArtistsService} from './artists.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  ,providers: [ArtistsService]
})

export class AppComponent {

  constructor(private _artistsServices: ArtistsService) {

  }
}
