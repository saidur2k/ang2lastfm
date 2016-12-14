import { Component } from '@angular/core';
import { Http, Headers} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  searchquery = '';
  artistsdata;

  constructor(private http: Http){}

  searchcall(){
    var headers = new Headers();
    var searchterm = 'http://localhost:8888/geo/gettopartist/' + this.searchquery + '/1';

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http.get(searchterm, {headers: headers}).subscribe((res) => {
      this.artistsdata = res.json();
    });
  }

}
