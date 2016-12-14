import { Injectable } from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ArtistsService {

  constructor(private http: Http) {
    console.log('Arists service is ready');
  }

  getPopular() : any {
    var url = 'http://localhost:8888/geo/gettopartist/australia/1';
    var response = this.http.get(url).map(this.extractData).catch(this.handleError);
    return response;
  }

  searchArtists(searchStr: string) {
    var search = new URLSearchParams();
    search.set('query', searchStr);
    return this.http.get('http://localhost:8888/geo/gettopartist/'+searchStr+'/1')
      .map(res => {
        return res.json();
      })
  }

  getArtist(id: string) {
    var search = new URLSearchParams();
    return this.http.get('http://localhost:8888/artist/gettoptrack/'+ id)
      .map(res => {
        return res.json();
      })
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
