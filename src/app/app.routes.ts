import { Routes } from '@angular/router';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistComponent } from './artist/artist.component';

export const appRoutes: Routes = [
  {path: '', component: ArtistsComponent},
  {path: 'artist/:mbid', component: ArtistComponent}
];
