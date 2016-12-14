import { Component, OnInit } from '@angular/core';

import {ArtistsService} from '../artists.service';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map'

import * as _ from 'underscore';

import { PagerService } from '../pager.service'

@Component({
  selector: 'artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})

export class ArtistsComponent implements OnInit {
  popularList: Array<Object>;
  searchRes: Array<Object>;
  searchStr: string;
  searchedStr: string;
  constructor(private _artistsService: ArtistsService , private pagerService: PagerService) {

  }

  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  ngOnInit() {
    this._artistsService.getPopular().subscribe(res => {
      this.popularList = res;
      this.setPage(1);
    });
  }

  searchArtists() {
    this._artistsService.searchArtists(this.searchStr).subscribe(res => {
      this.searchRes = res;
      this.searchedStr = this.searchStr;
    })
  }

  setPage(page: number) {
    if (page < 1 || page > 10) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(50, page);

    // get current page of items
    this.pagedItems = this.popularList.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
