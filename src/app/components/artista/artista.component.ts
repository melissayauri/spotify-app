import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
	selector: 'app-artista',
	templateUrl: './artista.component.html',
	styleUrls: [ './artista.component.css' ]
})
export class ArtistaComponent implements OnInit {
	artista: any = {};
	topTracks: any[] = [];
	loadingArtist: boolean;
	constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
		this.loadingArtist = true;

		this.router.params.subscribe((params) => {
			console.log('PARAMS', params['id']);
			this.getArtist(params['id']);
			this.getTopTracks(params['id']);
		});
	}

	ngOnInit() {}

	getArtist(id: string) {
		this.loadingArtist = true;
		this.spotify.getArtist(id).subscribe((artista) => {
			console.log('ARTISTA', artista);
			this.artista = artista;
			this.loadingArtist = false;
		});
	}

	getTopTracks(id: string) {
		this.spotify.getTopTracks(id).subscribe((topTracks) => {
			console.log('topTracks', topTracks);
			this.topTracks = topTracks;
		});
	}
}
