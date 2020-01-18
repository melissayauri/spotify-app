import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from './../../services/spotify.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	/*	paises: any[] = [];

	constructor(private http: HttpClient) {
		console.log('constructor de home hecho');
		this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((resp: any) => {
			this.paises = resp;
			console.log(resp);
		});
  }*/
	nuevasCanciones: any[] = [];
	loading: boolean;
	constructor(private spotify: SpotifyService) {
		this.loading = true;

		this.spotify.getNewReleases().subscribe((data: any) => {
			//console.log(data.albums.items);
			//this.nuevasCanciones = data.albums.items;
			console.log(data);
			this.nuevasCanciones = data;
			this.loading = false;
		});
	}

	ngOnInit() {}
}
