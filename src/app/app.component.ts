import {Component, ViewChild} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Page, ToolbarComponent} from "./toolbar/toolbar.component";
import {Router} from "@angular/router";


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	@ViewChild(ToolbarComponent) toolbar: ToolbarComponent;

	title = 'coffee-store';
	entries : Page[] = [
		{label: 'Home', route: ''},
		{label: 'Effettua un Ordine', route: '/placeOrder'},
		{label: 'Chi Siamo', route: '#'},
	];

	constructor(private fireStore: AngularFirestore, private router: Router) {
	}
}
