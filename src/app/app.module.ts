import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AngularFireModule} from "@angular/fire";
import {
	AngularFirestore,
	AngularFirestoreModule
} from "@angular/fire/firestore";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {environment} from "../environments/environment";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {OrderPageComponent} from './order-page/order-page.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'placeOrder', component: OrderPageComponent}
]

@NgModule({
	declarations: [
		AppComponent,
		ToolbarComponent,
		HomeComponent,
		OrderPageComponent
	],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		BrowserAnimationsModule,
		FontAwesomeModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [AngularFirestore],
	bootstrap: [AppComponent]
})
export class AppModule {}
