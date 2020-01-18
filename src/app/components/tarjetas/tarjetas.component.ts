import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-tarjetas',
	templateUrl: './tarjetas.component.html',
	styleUrls: [ './tarjetas.component.css' ]
})
export class TarjetasComponent implements OnInit {
	constructor(private router: Router) {}
	@Input() items: any[] = [];
	ngOnInit() {}
	seeArtist(item: any) {
		//console.log(item);
		let artistId;
		if (item.type === 'artist') {
			artistId = item.id;
			console.log(artistId, item);
		} else {
			artistId = item.artists[0].id;
			console.log(artistId, item);
		}
		this.router.navigate([ '/artist', artistId ]);
	}
}
