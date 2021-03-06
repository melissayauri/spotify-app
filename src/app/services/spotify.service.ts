import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
	providedIn: 'root'
})
export class SpotifyService {
	constructor(private http: HttpClient) {
		console.log('spotify service listo');
	}
	getQuery(query: string) {
		const url = `https://api.spotify.com/v1/${query}`;
		const headers = new HttpHeaders({
			Authorization: 'Bearer BQDlyEG6GPyApF4XfIf06IH3aWIZvwHA7JnV3b1PEFoKbhqd0u2XuE5OGTh9cDJL9eKR-MQnd_aPMmoh7u0'
		});
		return this.http.get(url, { headers });
	}
	getNewReleases() {
		return this.getQuery('browse/new-releases').pipe(
			map((data) => {
				return data['albums'].items;
			})
		);
		/*.subscribe((data) => {
			console.log(data);
		});*/
	}
	getArtists(termino: string) {
		return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
			map((data) => {
				return data['artists'].items;
			})
		);
		//	this.artistas = data.artists.items;
	}
	getArtist(id: string) {
		return this.getQuery(`artists/${id}`);
	}
	getTopTracks(id: string) {
		return this.getQuery(`artists/${id}/top-tracks?country=US`).pipe(map((data) => data['tracks']));
	}
}
